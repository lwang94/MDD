import io
import base64

import pandas as pd
import numpy as np


def get_axis_info(widget, keys='pcp'):
    res = widget
    for key in keys:
        if key == 'p':
            res = res['props']
        elif key == 'c':
            res = res['children']
        else:
            raise ValueError("keys must be either p or c")

    return res

def load_data(contents, usecols):
    values=[]
    for csvfile in contents:
        content_string = csvfile.split(',')[1]
        decoded_string = base64.b64decode(content_string)
        data = io.StringIO(decoded_string.decode('utf-8'))
        if usecols is None:
            value = (
                pd.read_csv(data)
                .values.transpose().flatten()
            )
        else:
            value = (
                pd.read_csv(data, usecols=usecols)
                .values.flatten()
            )
        values += list(value)
    return np.array(values)