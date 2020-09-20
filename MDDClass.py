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
    def __init__(self, metadata, label, data=None):
        # always sort metadata by Axis when first creating instance of class
        self.metadata = metadata.sort_values('Axis', ignore_index=True)
        self.label = label

        # create DataFrame from metadata
        if data is None:
            self.dataDF = self.emptyDF()
        else:
            self.dataDF = data

    def emptyDF(self):
        """
        Creates dataDF with all null values from metadata
        """
        columns = [
            f'{self.metadata.loc[i]["Name"]}'
            for i in range(len(self.metadata))
        ] + [self.label]
        rows = []
        for coord in itertools.product(*self.metadata['Values']):
            row = {columns[i]: coord[i] for i in range(len(coord))}
            row[self.label] = np.nan
            rows.append(row)
        return pd.DataFrame(rows, columns=columns)

    def dataArray(self):
        """
        Returns data as multidimentional array
        """
        num_values = [len(v) for v in self.metadata['Values']]
        return (
            self.dataDF[self.label]
            .to_numpy(dtype=np.float64) # keep dtype native NumPy
            .reshape(num_values)
        )
        
    def DFjoin(self, data):
        """
        Join current MDD to different DataFrame with same columns
        """
        df = self.dataDF.merge(
            data,
            on=self.metadata['Name'].tolist(),
            how='left'
        )

        #replace old null values with new values
        df[f'{self.label}_x'].fillna(df[f'{self.label}_y'], inplace=True)

        # ensure final result has same columns as original MDD
        df = df.rename(columns={f'{self.label}_x': self.label})
        self.dataDF = df.drop(f'{self.label}_y', axis=1)
    
    def fill(self, i_start, i_stop, data):
        """
        Fills parameter space given by i_start and i_stop
        with data
        """
        # create slice list and shape list
        sl = []
        shape = []
        for i in range(len(i_start)):
            sl.append(
                slice(i_start[i], i_stop[i] + 1)
            )
            shape.append(i_stop[i] + 1 - i_start[i])
        
        # fill dataArray with data
        arr = self.dataArray()
        arr[tuple(sl)] = data.reshape(shape)

        # change dataDF to match dataArray
        self.dataDF[self.label] = arr.flatten()




    # @dataArray.setter
    # def dataArray(self, dataArray):
    #     """
    #     Sets dataArray so that any change to dataDF will be reflected in dataDF
    #     """
    #     self.__dataArray = dataArray
    #     self.__dataDF[self.label] = self.__dataArray.flatten()

    # def change_array_val(self, val, target):
    #     """
    #     Updates single value in dataArray. Use this when setting single
    #     dataArray values because it's faster than the regular setter
    #     """
    #     self.__dataArray[target] = val

    #     # update dataDF as well
    #     targ = 0
    #     for i in range(len(self.axis_containers())):
    #         targ += target[i] * self.axis_containers()[i]
    #     self.__dataDF.at[targ, self.label] = val

    # def axis_containers(self):
    #     """
    #     Returns list containing dimensionality information based on the
    #     number of values in each axis.  Helper function for converting
    #     from DF index and Array coordinates.
    #     Ex. Num Values = [3, 3, 5, 5, 20]
    #         Calculations...
    #             3 x 5 x 5 x 20 --> 1500
    #             5 x 5 x 20     --> 500
    #             5 x 20         --> 100
    #             20             --> 20
    #                                1
    #         Axis Containers = [1500, 500, 100, 20, 1]
    #     """
    #     axis_containers_list = []
    #     num_values = self.metadata['Num Values']
    #     for i in range(1, len(num_values)):
    #         axis_containers_list.append(np.prod(num_values[i:]))
    #     return axis_containers_list + [1]

    # def add_data(self, data, indices):
    #     "Adds data to mdd"
    #     # find coordinates to add data to
    #     slice_list = [slice(None, None) for i in range(len(indices))]
    #     shape = [None for i in range(len(indices))]
    #     for i in indices:
    #         index_start = self.metadata.loc[i-1]['Values'].index(indices[i][0])
    #         index_stop = self.metadata.loc[i-1]['Values'].index(indices[i][1])
    #         slice_list[i-1] = slice(index_start, index_stop+1)
    #         shape[i-1] = index_stop - index_start + 1

    #     # update Array and DF
    #     self.__dataArray[tuple(slice_list)] = data.reshape(tuple(shape))
    #     self.__dataDF['y'] = self.__dataArray.flatten()

    # def slice_mdd(self, slice_indices):
    #     for name in slice_indices:
    #         row = self.metadata.loc[self.metadata['Name'] == name]
    #         new_val = row['Values'].array[0][slice_indices[name][0]: slice_indices[name][1]]
    #         new_nval = len(new_val)
    #         self.metadata.loc[self.metadata['Name'] == name, ['Values', 'Num Values']] = [new_val], new_nval

    #     columns = [
    #         f'x{self.metadata.loc[i]["Axis"]}'
    #         for i in range(len(self.metadata))
    #     ]
    #     rows = []
    #     for coord in itertools.product(*self.metadata['Values']):
    #         row = {columns[i]: coord[i] for i in range(len(coord))}
    #         rows.append(row)
    #     right = pd.DataFrame(rows, columns=columns)
    #     self.dataDF = self.dataDF.merge(right, on=columns, how='right')

    # def move_axis(self, new_pos):
    #     "Moves mdd axes"
    #     # move dataArray axes
    #     new_pos = np.array(new_pos)
    #     self.dataArray = np.moveaxis(
    #         self.dataArray,
    #         np.arange(len(self.metadata.index)),
    #         new_pos - 1
    #     )

    #     # update metadata and DF
    #     self.metadata['Axis'] = new_pos
    #     self.metadata = self.metadata.sort_values('Axis', ignore_index=True)
    #     columns = [
    #         f'x{self.metadata.loc[i]["Axis"]}'
    #         for i in range(len(self.metadata))
    #     ]
    #     rows = []
    #     for coord in itertools.product(*self.metadata['Values']):
    #         rows.append({columns[i]: coord[i] for i in range(len(coord))})
    #     self.__dataDF[columns] = pd.DataFrame(rows, columns=columns)

    # def num_deriv(self, params):
    #     deriv_array = self.dataArray
    #     for name in params:
    #         axis = self.metadata.loc[self.metadata['Name'] == name]['Axis'].values[0] - 1

    #         xvalues = self.metadata.loc[self.metadata['Name'] == name]['Values'].values[0]
    #         xvalues = np.array(xvalues)

    #         deriv_array = np.gradient(deriv_array, xvalues, axis=axis)
    #     return deriv_array


    # def create_training(self):
    #     self.training = self.dataDF.copy().dropna()

    #     self.trainX = self.training.drop(['y'], axis=1)
    #     self.trainX = generate_features(self.trainX)

    #     self.trainY = self.training['y'] / self.dataDF['y'].max()

    # def train_model(self):
    #     # self.model = lm.Lasso(alpha=0.01, tol=1e-4, max_iter=10000)
    #     self.model = em.RandomForestRegressor(max_features=len(self.trainX.columns)//3, random_state=42, verbose=20)
    #     self.model.fit(self.trainX, self.trainY)
