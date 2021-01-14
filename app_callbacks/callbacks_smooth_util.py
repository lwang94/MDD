import numpy as np 

def smoothing(meta, arr, mode, ax, window):
    """
    Smooths data according to user defined mode
    and along user defined axis
    """
    # define dictionary to match mode to numpy function
    smooth_function = {
        'mean': np.nanmean,
        'median': np.nanmedian,
        'min': np.nanmin,
        'max': np.nanmax
    }

    # find axis that needs to be smoothed over
    ax = meta.loc[meta['Name'] == ax, 'Axis'].item() - 1

    # pad array and meta values with np.nan in case
    # window is not a factor of the dimensions
    arr, new_values = pad_with_nan(arr, meta, ax, window)

    # increase array/values by single dimension to vectorize operation in NumPy
    arr, new_values = increment_dim(arr, new_values, ax, window)
    
    # smooth over user defined axis with user defined mode
    arr = smooth_function[mode](arr, axis=ax+1)
    meta['Values'][ax] = list(smooth_function[mode](new_values, axis=1))

    return arr, meta


def pad_with_nan(arr, meta, ax, window):
    """
    Pad array and meta values with np.nan in case 
    window is not a factor of the dimensions
    """
    # find how much padding is needed to make 
    # dimensions a multiple of window
    padding = [[0, 0] for i in range(arr.ndim)]
    padding[ax] = [
        0, 
        (window - (arr.shape[ax] % window)) % window
    ]

    # pad array and values in meta with np.nan
    arr = np.pad(arr, padding, constant_values=np.nan)
    new_values = np.pad(
        np.array(meta.loc[ax, 'Values'], dtype=np.float64), 
        padding[ax], 
        constant_values=np.nan
    )

    return arr, new_values


def increment_dim(arr, values, ax, window):
    """
    Increase array/values by single dimension to vectorize operation in NumPy
    """
    # increase array dimension by one along the correct axis
    temp_shape_arr = (
        arr.shape[:ax] 
        + (arr.shape[ax] // window, ) 
        + (window, )
        + arr.shape[ax + 1:]
    )
    arr = arr.reshape(temp_shape_arr)

    # increase dimension of values in meta by one along the correct axis
    temp_shape_values = (values.shape[0] // window, window)
    values = values.reshape(temp_shape_values)

    return arr, values