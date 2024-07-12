import os
import logging
import json
from dotenv import load_dotenv
from motor.motor_asyncio import (
    AsyncIOMotorClient,
    AsyncIOMotorDatabase,
    AsyncIOMotorCollection,
)
from pymongo import errors
from typing import Any, Dict, List


class MongoDBClient:
    def __init__(self, connection_string: str, database_name: str):
        """
        初始化 MongoDB 客户端
        :param connection_string: MongoDB 连接字符串
        :param database_name: 要连接的数据库名称
        """
        self.connection_string = connection_string
        self.database_name = database_name
        self.client: AsyncIOMotorClient = None
        self.db: AsyncIOMotorDatabase = None

    async def connect(self):
        """
        建立与 MongoDB 的连接
        """
        try:
            self.client = AsyncIOMotorClient(self.connection_string)
            self.db = self.client[self.database_name]
            print(f"Connected to MongoDB database: {self.database_name}")
        except errors.ConnectionError as e:
            print(f"Could not connect to MongoDB: {e}")
            raise

    async def get_database(self) -> AsyncIOMotorDatabase:
        """
        获取连接的数据库对象
        :return: 数据库对象
        """
        if self.db is None:
            raise ConnectionError(
                "Database connection is not established. Call connect() first."
            )
        return self.db

    # Collection operations
    async def get_collection(self, collection_name: str) -> AsyncIOMotorCollection:
        """
        获取集合对象
        :param collection_name: 集合名称
        :return: 集合对象
        """
        return self.db[collection_name]

    async def create_collection(self, collection_name: str) -> AsyncIOMotorCollection:
        """
        创建集合
        :param collection_name: 集合名称
        :return: 创建的集合对象
        """
        return await self.db.create_collection(collection_name)

    async def drop_collection(self, collection_name: str):
        """
        删除集合
        :param collection_name: 集合名称
        """
        await self.db.drop_collection(collection_name)

    # Document operations
    async def insert_document(
        self, collection_name: str, document: Dict[str, Any]
    ) -> Any:
        """
        插入文档到集合
        :param collection_name: 集合名称
        :param document: 文档数据
        :return: 插入操作的结果
        """
        collection = await self.get_collection(collection_name)
        print("插入的集合是:", collection_name)
        result = await collection.insert_one(document)
        print("插入成功")
        return result

    async def find_documents(
        self, collection_name: str, query: Dict[str, Any] = None
    ) -> List[Dict[str, Any]]:
        """
        查询集合中的文档
        :param collection_name: 集合名称
        :param query: 查询条件
        :return: 查询结果列表
        """
        if query is None:
            query = {}
        collection = await self.get_collection(collection_name)
        cursor = collection.find(query)
        return await cursor.to_list(length=None)

    async def update_document(
        self, collection_name: str, query: Dict[str, Any], update: Dict[str, Any]
    ):
        """
        更新集合中的文档
        :param collection_name: 集合名称
        :param query: 查询条件
        :param update: 更新数据
        :return: 更新操作的结果
        """
        collection = await self.get_collection(collection_name)
        return await collection.update_one(query, {"$set": update})

    async def delete_document(self, collection_name: str, query: Dict[str, Any]):
        """
        删除集合中的文档
        :param collection_name: 集合名称
        :param query: 查询条件
        :return: 删除操作的结果
        """
        collection = await self.get_collection(collection_name)
        return await collection.delete_one(query)


load_dotenv()
connection_string = os.getenv("MONGO_URI")
database_name = os.getenv("DB_NAME")

db = MongoDBClient(connection_string, database_name)
