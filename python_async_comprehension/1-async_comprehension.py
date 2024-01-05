#!/usr/bin/env python3
"""async comprehension module"""

async_generator = __import__('0-async_generator').async_generator
from typing import List
import asyncio
import random


async def async_comprehension() -> List[float]:
    """async comprehension function"""
    return [i async for i in async_generator()]
