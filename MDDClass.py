import pandas as pd
import numpy as np
import itertools
import bisect

from pathlib import Path
import json


def to_json_pair(mdd):
    metadata = mdd.metadata.to_json(orient='split')
    dataDF = mdd.dataDF.to_json(orient='split')
    return [metadata, dataDF]


def read_json_pair(js_pair):
    """js has to be a list of json strings with the first element the metadata and the second element the coordinate data"""
    metadata = pd.read_json(js_pair[0], orient='split')
    mdd = MDD(metadata)
    mdd.dataDF = pd.read_json(js_pair[1], orient='split')
    return mdd


class MDD:
    def __init__(self, metadata):
        self.metadata = metadata.sort_values('Axis', ignore_index=True)
        columns = [f'x{self.metadata.loc[i]["Axis"]}' for i in range(len(self.metadata))] + ['y']
        rows=[]
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
        self.__dataDF = dataDF
        self.__dataArray = (self.__dataDF['y']
                           .copy()
                           .to_numpy()
                           .reshape(self.metadata['Num Values'])
                           )


    def change_df_val(self, val, target):
        self.__dataDF.at[target, 'y'] = val
        targ = target
        targslice = []
        for ad in self.axis_containers():
            pos = targ // ad
            targslice.append(pos)
            targ -= pos * ad
        self.__dataArray[targslice] = val


    @property
    def dataArray(self):
        return self.__dataArray


    @dataArray.setter
    def dataArray(self, dataArray):
        self.__dataArray = dataArray
        self.__dataDF['y'] = self.__dataArray.flatten()


    def change_array_val(self, val, target):
        self.__dataArray[target] = val
        targ = 0
        for i in range(len(self.axis_containers())):
            targ += target[i] * self.axis_containers()[i]
        self.__dataDF.at[target, 'y'] = val


    def axis_containers(self):
        axis_containers_list = []
        num_values = self.metadata['Num Values']
        for i in range(1, len(num_values)):
            axis_containers_list.append(np.prod(num_values[i:]))
        return axis_containers_list + [1]


    def add_data(self, data, indices):
        "make sure order of axes match in app"
        slice_list = [slice(None, None) for i in range(len(indices))]
        shape = [None for i in range(len(indices))]
        for i in indices:
            index_start = self.metadata.loc[i-1]['Values'].index(indices[i][0])
            index_stop = self.metadata.loc[i-1]['Values'].index(indices[i][1])
            slice_list[i-1] = slice(index_start, index_stop+1)
            shape[i-1] = index_stop - index_start + 1
        self.__dataArray[tuple(slice_list)] = data.reshape(tuple(shape))
        self.__dataDF['y'] = self.__dataArray.flatten()


    def move_axis(self, new_pos):
        new_pos = np.array(new_pos)
        self.dataArray = np.moveaxis(
            self.dataArray,
            np.arange(len(self.metadata.index)),
            new_pos - 1
        )

        self.metadata['Axis'] = new_pos
        self.metadata = self.metadata.sort_values('Axis', ignore_index=True)
        columns = [f'x{self.metadata.loc[i]["Axis"]}' for i in range(len(self.metadata))]
        rows = []
        for coord in itertools.product(*self.metadata['Values']):
            rows.append({columns[i]: coord[i] for i in range(len(coord))})
        self.__dataDF[columns] = pd.DataFrame(rows, columns=columns)


# x1 = {'Axis': 1, 'Name': 'DAC', 'Num Values': 500, 'Define Values': 'Upload', 'Values': list(np.arange(0, 500))}
# x2 = {'Axis': 2, 'Name': 'Temp', 'Num Values': 5, 'Define Values': 'Range', 'Values': [1, 1.5, 2, 2.5, 3]}
# x3 = {'Axis': 3, 'Name': 'Pressure', 'Num Values': 3, 'Define Values': 'Custom', 'Values': [2, 3, 4]}

# metadata = pd.DataFrame([x2, x1, x3])

# mdd = MDD(metadata)

# # path = Path.cwd() / 'testfiles'
# # filelist = [path / 'T1P2.csv', path / 'T1_5P2.csv', path / 'T2P2.csv', path / 'T2_5P2.csv', path / 'T3P2.csv'] * 3
# # values = load_data(filelist, ['Current'])
# # indices = [
# #     {
# #         3: (2, 2),
# #         2: (1, 1),
# #         1: (0, 499)
# #     },
# #     {
# #         3: (2, 2),
# #         2: (1.5, 1.5),
# #         1: (0, 499)
# #     },
# #     {
# #         3: (2, 2),
# #         2: (2, 2),
# #         1: (0, 499)
# #     },
# #     {
# #         3: (2, 2),
# #         2: (2.5, 2.5),
# #         1: (0, 499)
# #     },
# #     {
# #         3: (2, 2),
# #         2: (3, 3),
# #         1: (0, 499)
# #     }
# # ]
# # for i, csv in enumerate(filelist[0:5]):
# #     values = load_data([csv], ['Current'])
# #     mdd.add_values(values, indices[i])
# # print(mdd.dataDF.head(20))
# # print(mdd.dataDF['y'].unique())
# print('#################################################')
# mdd.move_axis([3, 1, 2])
# print(mdd.dataDF.head(20))
# print(mdd.dataArray.shape)
