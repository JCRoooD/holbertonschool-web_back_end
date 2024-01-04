#!/usr/bin/env python3
"""importing wait random from 0-basic_async_syntax"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> list:
    """spawn wait_random n times with max_delay"""
    tasks = [asyncio.create_task(wait_random(max_delay)) for i in range(n)]
    return [await task for task in asyncio.as_completed(tasks)]
