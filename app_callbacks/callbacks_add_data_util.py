import numpy as np
import bisect
import dash_core_components as dcc


def data_start(row):
    """
    Create Start input for axis in adding data
    """
    return dcc.Input(
        id={'type': 'data_start', 'index': row['Axis']},
        type='text',
        value=row['Values'][0],
        className='col-sm-2'
    )


def data_slider(row):
    """
    Create Slider component for axis in adding data
    """
    return dcc.RangeSlider(
        id={'type': 'data_slider', 'index': row['Axis']},
        min=row['Values'][0],
        max=row['Values'][-1],
        marks={i: '' for i in row['Values']},
        step=None,
        value=[row['Values'][0], row['Values'][-1]],
        className='align-middle col-sm-7'
    )


def data_stop(row):
    """
    Create Stop input for axis in adding data
    """
    return dcc.Input(
        id={'type': 'data_stop', 'index': row['Axis']},
        type='text',
        value=row['Values'][-1],
        className='col-sm-2'
    )


def find_data_indices(validval, start, stop):
    """
    Find indices of start, stop in validval. 
    """
    # use binary search to find indices
    start_ind = bisect.bisect_left(validval, float(start))
    stop_ind = bisect.bisect_left(validval, float(stop))

    if start_ind >= len(validval): # limit start input to last value
        start_ind = len(validval) - 1
    if stop_ind >= len(validval): # limit stop input to last value
        stop_ind = len(validval) - 1
    if stop_ind < start_ind: # ensure start index is less than stop index
        stop_ind = start_ind
    
    return start_ind, stop_ind


def find_space(validval, start, stop):
    """
    Find indices start, stop indices that form parameter space
    """
    i_start, i_stop = [], []
    for i in range(len(start)):
        i_start.append(bisect.bisect_left(validval[i], start[i])) # binary search
        i_stop.append(bisect.bisect_left(validval[i], stop[i])) # binary search
    
    return i_start, i_stop


def find_null_count(i_start, i_stop, mdd):
    """
    Find count and percent of null values in given parameter space
    """
    # create slice list to reach into mdd's parameter space
    sl = []
    for i in range(len(i_start)):
        sl.append(
            slice(i_start[i], i_stop[i] + 1)
        )

    # find number of null values in mdd's parameter space
    null_count = np.isnan(mdd.dataArray()[tuple(sl)]).sum()

    # find percentage of null values in mdd's parmeter space as integer
    null_percent = int(100 * null_count / np.prod(mdd.dataArray()[tuple(sl)].shape))

    return f'{null_count} Null values\n{null_percent}% of values in parameter space are Null'


def define_shape(i_start, i_stop):
    """
    Return shape of parameter space as string
    """
    # find shape as list of ints
    shape = [i_stop[i] + 1 - i_start[i] for i in range(len(i_start))]

    # create string to define shape
    s = ''
    for i in range(len(shape)):
        s += f'{shape[i]}x'

    return s