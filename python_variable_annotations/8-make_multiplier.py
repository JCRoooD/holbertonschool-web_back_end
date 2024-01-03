#!/bin/usr/env python3
"""basic annotations - make multiplier"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """returns a function that multiplies a float by multiplier"""
    def multiply(n: float) -> float:
        """returns the product of multiplier and n"""
        return n * multiplier
    return multiply
