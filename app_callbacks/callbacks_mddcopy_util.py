import numpy as np
import pandas as pd 

import MDDClass as mc
from app_callbacks import callbacks_add_data_util as add_data_util
from app_callbacks import callbacks_smooth_util as smooth
from app_callbacks import callbacks_derive_util as derive
from app_callbacks import callbacks_fit_util as fit


def shift_mdd(meta, label, mdd, validval, start, stop, layout):
    """
    Create new view of mdd by slicing and changing order of axes
    """
    # load current mdd
    mdd = mc.MDD(
        pd.DataFrame(meta), 
        label, 
        data=pd.DataFrame(mdd)
    )

    # find slices and positions of axes
    i_start, i_stop = add_data_util.find_space(validval, start, stop)
    new_pos = np.array([layout[i]['x'] for i in range(len(layout))])

    # change view of mdd based on above parameters
    mdd.shift_view(i_start, i_stop, new_pos)

    return mdd.dataDF.to_dict('records'), mdd.metadata.to_dict('records')


def modify_mdd(
    metacopy, label, mddcopy, operations,
    smooth_mode, smooth_ax, smooth_window,
    derive_axis,
    fit_input
):
    """
    Modify data within view of mdd
    """
    # load current view of mdd
    mdd = mc.MDD(
        pd.DataFrame(metacopy),
        label,
        data=pd.DataFrame(mddcopy)
    )

    # use numpy array for easier modification
    arr = mdd.dataArray()

    # modify according to user defined order of operations
    for op in operations:
        # smoothing operation
        if op[0] == 'smooth' and op[1]:
            arr, meta = smooth.smoothing(mdd.metadata, arr, smooth_mode, smooth_ax, smooth_window)

            # create new mdd with smoothed data
            mdd_mod = mc.MDD(meta, label)
            mdd_mod.dataDF[label] = arr.flatten()
        
        # derivative operation
        if op[0] == 'derive' and op[1]:
            arr = derive.deriving(arr, derive_axis)
        
        # fitting operation
        if op[0] == 'fit' and op[1]:
            arr = fit.fitting(arr, fit_input)

    
    return mdd_mod.dataDF.to_dict('records'), mdd_mod.metadata.to_dict('records')