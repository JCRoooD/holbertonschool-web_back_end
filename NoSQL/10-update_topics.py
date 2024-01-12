#!/usr/bin/env python3
"""update topics module"""
import pymongo


def update_topics(mongo_collection, name, topics):
    """update topics module"""
    if mongo_collection is not None:
        mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
        return None
