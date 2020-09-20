import math
import numpy as np
import pandas as pd
import bisect

import app_util as au
import config as cf


def add_rows(n_clicks, rows):
    """
    Add extra row to metadata table
    """
    if n_clicks > 0:
        rows.append({
            'Axis': math.nan,
            'Name': '',
            'Start': '',
            'Stop': '',
            'Step': '',
            'Custom': ''
        })
    return rows


def load_metatable(load, label, rows):
    """
    update metadata table when loading data
    """
    try:
        df = extract_metavalues(load, label)
        
    # if label or load is incompatible, return previous table
    except:
        return rows

    return df.drop('Values', axis=1).to_dict('records')


def initial_metadata_check(df):
    """
    Perform initial checks on metadata table to
    ensure values have been inputted properly.
    """
    # check if Axis numbers was inputted correctly
    s = set(df['Axis'])
    for i in range(len(df['Axis'])):
        if i + 1 not in s:
            return cf.error_axislength

    # ensure Names are unique
    if df['Name'].is_unique is False:
        return cf.error_uniquenames

    # passed all checks
    return None


def create_values(row):
    """
    Create values for metadata
    """
    # create evenly spaced list of values based on inputs
    start, stop = float(row['Start']), float(row['Stop'])
    value = np.arange(start, stop, float(row['Step']))
    value = value.tolist()

    # check for rounding errors on last value
    if abs(stop - value[-1]) > max(stop, value[-1]) * 1e-7:
        value.append(stop)
    
    # add custom values
    if row['Custom'] != '':
        custom = [float(c) for c in row['Custom'].split(',')]
        for c in custom:
            # edge case if custom value is greater than stop
            if c > value[-1]:
                value.append(c)
            else:
                i = bisect.bisect_left(value, c)
                value = value[:i] + [c] + value[i:]
    
    return value


def extract_metavalues(load, label):
    """
    Extract metadata from loaded data
    """
    df = pd.DataFrame(load).drop(label, axis=1)
    record = []
    for i, col in enumerate(df.columns):
        d = {
            'Axis': i + 1,
            'Name': col,
            'Start': min(df[col]),
            'Stop': max(df[col]),
            'Step': max(df[col]) - min(df[col]),

            # ensure values are unique and sorted
            'Custom': ','.join([str(j) for j in sorted(set(df[col]))]), 
            'Values': list(sorted(set(df[col].tolist())))
        }
        record.append(d)
    return pd.DataFrame(record)
