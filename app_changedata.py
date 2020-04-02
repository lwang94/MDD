import mdd
import pandas as pd

import app_util as au


def create_mddata(metadata):
    meta = pd.read_json(metadata, orient='split')
    mddata = mdd.MDD(meta)
    return mdd.to_json_pair(mddata)


def add_data(mdd_state, add_value, axis_inputs, value_header):
    mddata = mdd.read_json_pair(mdd_state)

    headers = value_header.split(',')
    values = au.load_data(add_value, usecols=headers)

    indices = {}
    for widget in axis_inputs:
        dim = int(
            au.get_axis_info(
                widget,
                keys='p'
            )
            ['id'].split('_')[0]
        )
        start = float(
            au.get_axis_info(
                widget,
                keys='pc'
            )
            [0]['props']['value']
        )
        stop = float(
            au.get_axis_info(
                widget,
                keys='pc'
            )
            [1]['props']['value']
        )
        indices[dim] = (start, stop)
    mddata.add_values(values, indices)
    return mdd.to_json_pair(mddata)