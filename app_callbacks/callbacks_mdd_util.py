import numpy as np
import pandas as pd 
import base64
import io

import MDDClass as mc
import config as cf 
from app_callbacks import callbacks_metadata_util as meta_util
from app_callbacks import callbacks_add_data_util as add_data_util


def create_mdd_from_metatable(metatable, load, label):
    """
    Create MDD and metadata from metadata table
    """
    df = pd.DataFrame(metatable)

    # check first two columns have been inputted correctly
    check = meta_util.initial_metadata_check(df)
    if check is not None:
        return check, None, False

    # create metadata by calculating values
    values = []
    for i, row in enumerate(metatable):
        try:
            value = meta_util.create_values(row)
            value = list(sorted(set(value)))
            values.append(value)
        except ValueError: # exception if range inputted incorrectly
            return cf.error_rangeval, None, False
    df['Values'] = values
    df = df.drop(['Start', 'Stop', 'Step', 'Custom'], axis=1) # drop unneccessary columns

    # create mdd
    mdd = mc.MDD(df, label)
    if load is not None: # if dataset already uploaded
        try:
            load = pd.DataFrame(load)
            mdd.DFjoin(load)
        except:
            return cf.error_load, None, False

    return mdd.metadata.to_dict('records'), mdd.dataDF.to_dict('records'), True


def create_mdd_from_load(load, label):
    """
    Create MDD and metadata from loading data
    """
    try:
        # grab metadata from file
        df = meta_util.extract_metavalues(load, label)
        meta = df.drop(['Start', 'Stop', 'Step', 'Custom'], axis=1) # drop unneccessary columns

        # create mdd
        mdd = mc.MDD(meta, label)
        mdd.DFjoin(pd.DataFrame(load)) # join MDD to loaded data
    except:
        return cf.error_load, None, False

    return mdd.metadata.to_dict('records'), mdd.dataDF.to_dict('records'), True


def fill_mdd(fill_contents, label, meta, mdd, validval, start, stop, fill_fname):
    """
    Add to MDD by filling parameter space
    """
    # grab data from contents
    data = []
    for i in range(len(fill_contents)):
        if fill_fname[i][-4:] != '.csv': # ensure .csv files were uploaded
            return cf.error_csv, None, False
        
        # convert data from string to readable values
        content_string = fill_contents[i].split(',')[1]
        decoded_string = base64.b64decode(content_string)
        data_string = io.StringIO(decoded_string.decode('utf-8'))

        # append each file to list as single column dataframe
        data.append(
            pd.read_csv(data_string, usecols=[label]).values
        )
    data = np.array(data).flatten() # obtain data as flattened list of values

    # load existing MDD
    mdd = mc.MDD(
        pd.DataFrame(meta), 
        label, 
        data=pd.DataFrame(mdd)
    )

    # find parameter space to fill
    i_start, i_stop = add_data_util.find_space(validval, start, stop)

    # fill parameter space with data
    mdd.fill(i_start, i_stop, data)

    return mdd.metadata.to_dict('records'), mdd.dataDF.to_dict('records'), False


def join_mdd(join_fname, join_contents, meta, label, mdd):
    """
    Add to MDD by joining to new dataset
    """
    if join_fname[-4:] != '.csv': # ensure .csv files were uploaded
        return cf.error_csv, None, False

    # convert data from string to readable values
    content_string = join_contents.split(',')[1]
    decoded_string = base64.b64decode(content_string)
    data_string = io.StringIO(decoded_string.decode('utf-8'))

    # obtain data as dataframe
    data = pd.read_csv(data_string)

    # load existing MDD
    mdd = mc.MDD(
        pd.DataFrame(meta), 
        label, 
        data=pd.DataFrame(mdd)
    )

    try:
        # join new data to existing MDD
        mdd.DFjoin(data)
    except:
        return cf.error_load, None, False
    
    return mdd.metadata.to_dict('records'), mdd.dataDF.to_dict('records'), False