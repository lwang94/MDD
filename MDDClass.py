import pandas as pd
import numpy as np
from sklearn import linear_model as lm
from sklearn import ensemble as em
import itertools

from pathlib import Path
import app_util as au

def to_json_pair(mdd):
    """
    Turns mdd into pair of jsons containing its core information
    """
    metadata = mdd.metadata.to_json(orient='split')
    dataDF = mdd.dataDF.to_json(orient='split')
    return [metadata, dataDF]


def read_json_pair(js_pair):
    """
    Creates mdd from pair of jsons containing core information.
    js_pair is a list of jsons with the first element the metadata
    and the second element the coordinate data.
    """
    metadata = pd.read_json(js_pair[0], orient='split')
    mdd = MDD(metadata)
    mdd.dataDF = pd.read_json(js_pair[1], orient='split')
    return mdd

def generate_features(df):
    cols = list(df.columns)

    # squaring values
    colssquared = [f'{col}_squared' for col in cols]
    df[colssquared] = df[cols] ** 2

    # cubing values
    colscubed = [f'{col}_cubed' for col in cols]
    df[colscubed] = df[cols] ** 3

    # log values
    # colslog = [f'{col}_log' for col in cols]
    # df[colslog] = np.log(df[cols])

    return df


class MDD:
    def __init__(self, metadata):
        # always sort metadata by Axis when first creating instance of class
        self.metadata = metadata.sort_values('Axis', ignore_index=True)

        # create coordinate DataFrame from metadata
        columns = [
            f'x{self.metadata.loc[i]["Axis"]}'
            for i in range(len(self.metadata))
        ] + ['y']
        rows = []
        for coord in itertools.product(*self.metadata['Values']):
            row = {columns[i]: coord[i] for i in range(len(coord))}
            row['y'] = np.nan
            rows.append(row)
        self.dataDF = pd.DataFrame(rows, columns=columns)

    @property
    def dataDF(self):
        return self.__dataDF

    @dataDF.setter
    def dataDF(self, dataDF):
        """
        Sets dataDF so that any change to dataDF will be reflected in dataArray
        """
        self.__dataDF = dataDF
        self.__dataArray = (
            self.__dataDF['y']
            .copy()  # prevents unwanted interactions
            .to_numpy()
            .reshape(self.metadata['Num Values'])
        )

    def change_df_val(self, val, index):
        """
        Updates single value in dataDF. Use this when setting single dataDF
        values because it's faster than the regular setter
        """
        self.__dataDF.at[index, 'y'] = val

        targslice = []

        # find coordinates in Array from DF index
        for ad in self.axis_containers():
            pos = index // ad
            targslice.append(pos)
            index -= pos * ad
        self.__dataArray[targslice] = val

    @property
    def dataArray(self):
        return self.__dataArray

    @dataArray.setter
    def dataArray(self, dataArray):
        """
        Sets dataArray so that any change to dataDF will be reflected in dataDF
        """
        self.__dataArray = dataArray
        self.__dataDF['y'] = self.__dataArray.flatten()

    def change_array_val(self, val, target):
        """
        Updates single value in dataArray. Use this when setting single
        dataArray values because it's faster than the regular setter
        """
        self.__dataArray[target] = val

        # update dataDF as well
        targ = 0
        for i in range(len(self.axis_containers())):
            targ += target[i] * self.axis_containers()[i]
        self.__dataDF.at[targ, 'y'] = val

    def axis_containers(self):
        """
        Returns list containing dimensionality information based on the
        number of values in each axis.  Helper function for converting
        from DF index and Array coordinates.
        Ex. Num Values = [3, 3, 5, 5, 20]
            Calculations...
                3 x 5 x 5 x 20 --> 1500
                5 x 5 x 20     --> 500
                5 x 20         --> 100
                20             --> 20
                                   1
            Axis Containers = [1500, 500, 100, 20, 1]
        """
        axis_containers_list = []
        num_values = self.metadata['Num Values']
        for i in range(1, len(num_values)):
            axis_containers_list.append(np.prod(num_values[i:]))
        return axis_containers_list + [1]

    def add_data(self, data, indices):
        "Adds data to mdd"
        # find coordinates to add data to
        slice_list = [slice(None, None) for i in range(len(indices))]
        shape = [None for i in range(len(indices))]
        for i in indices:
            index_start = self.metadata.loc[i-1]['Values'].index(indices[i][0])
            index_stop = self.metadata.loc[i-1]['Values'].index(indices[i][1])
            slice_list[i-1] = slice(index_start, index_stop+1)
            shape[i-1] = index_stop - index_start + 1

        # update Array and DF
        self.__dataArray[tuple(slice_list)] = data.reshape(tuple(shape))
        self.__dataDF['y'] = self.__dataArray.flatten()

    def move_axis(self, new_pos):
        "Moves mdd axes"
        # move dataArray axes
        new_pos = np.array(new_pos)
        self.dataArray = np.moveaxis(
            self.dataArray,
            np.arange(len(self.metadata.index)),
            new_pos - 1
        )

        # update metadata and DF
        self.metadata['Axis'] = new_pos
        self.metadata = self.metadata.sort_values('Axis', ignore_index=True)
        columns = [
            f'x{self.metadata.loc[i]["Axis"]}'
            for i in range(len(self.metadata))
        ]
        rows = []
        for coord in itertools.product(*self.metadata['Values']):
            rows.append({columns[i]: coord[i] for i in range(len(coord))})
        self.__dataDF[columns] = pd.DataFrame(rows, columns=columns)

    def num_deriv(self, params):
        deriv_array = self.dataArray
        for name in params:
            axis = self.metadata.loc[self.metadata['Name'] == name]['Axis'].values[0] - 1

            xvalues = self.metadata.loc[self.metadata['Name'] == name]['Values'].values[0]
            xvalues = np.array(xvalues)

            deriv_array = np.gradient(deriv_array, xvalues, axis=axis)
        return deriv_array


    def create_training(self):
        self.training = self.dataDF.copy().dropna()

        self.trainX = self.training.drop(['y'], axis=1)
        self.trainX = generate_features(self.trainX)

        self.trainY = self.training['y'] / self.dataDF['y'].max()

    def train_model(self):
        # self.model = lm.Lasso(alpha=0.01, tol=1e-4, max_iter=10000)
        self.model = em.RandomForestRegressor(max_features=len(self.trainX.columns)//3, random_state=42, verbose=20)
        self.model.fit(self.trainX, self.trainY)






# x1 = {'Axis': 1, 'Name': 'DAC', 'Num Values': 500, 'Define Values': 'Upload', 'Values': list(np.arange(0, 500))}
# x2 = {'Axis': 2, 'Name': 'Temp', 'Num Values': 5, 'Define Values': 'Range', 'Values': [1, 1.5, 2, 2.5, 3]}
# x3 = {'Axis': 3, 'Name': 'Pressure', 'Num Values': 3, 'Define Values': 'Custom', 'Values': [2, 3, 4]}

# metadata = pd.DataFrame([x2, x1, x3])

# mdd = MDD(metadata)

# path = Path.cwd() / 'testfiles'
# filelist = [path / 'T1P2.csv', path / 'T1_5P2.csv', path / 'T2P2.csv', path / 'T2_5P2.csv', path / 'T3P2.csv'] * 3
# values = au.load_data(filelist, ['Current'])
# indices = [
#     {
#         3: (2, 2),
#         2: (1, 1),
#         1: (0, 499)
#     },
#     {
#         3: (2, 2),
#         2: (1.5, 1.5),
#         1: (0, 499)
#     },
#     {
#         3: (2, 2),
#         2: (2, 2),
#         1: (0, 499)
#     },
#     {
#         3: (2, 2),
#         2: (2.5, 2.5),
#         1: (0, 499)
#     },
#     {
#         3: (2, 2),
#         2: (3, 3),
#         1: (0, 499)
#     }
# ]
# for i, csv in enumerate(filelist[0:5]):
#     values = load_data([csv], ['Current'])
#     mdd.add_values(values, indices[i])
# print(mdd.dataDF.head(20))
# # print(mdd.dataDF['y'].unique())
# print('#################################################')
# mdd.move_axis([3, 1, 2])
# print(mdd.dataDF.head(20))
# print(mdd.dataArray.shape)
