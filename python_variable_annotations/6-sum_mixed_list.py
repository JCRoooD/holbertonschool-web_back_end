#!/bin/usr/env python3
"""basic annotations - mixed list"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """returns the sum of a list of floats and ints"""
    return sum(mxd_lst)