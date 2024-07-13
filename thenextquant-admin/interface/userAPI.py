import os
from datetime import datetime
from bson import ObjectId
from dotenv import load_dotenv
from fastapi import APIRouter

from common.constants import CollectionName, ResponseModel, StatusCode, TimeInfo
from infrastructure.database.MongodbClient import MongoDBClient
from infrastructure.model.user.User import UserBase

# 创建路由实例
user_router = APIRouter()

#
load_dotenv()
connection_string = os.getenv("MONGO_URI")
database_name = os.getenv("DB_NAME")

# 定义一个MongoDB客户端对象，用于与数据库交互
mongo_client = MongoDBClient(connection_string, database_name)


@user_router.post("/", response_model=ResponseModel)
async def create_user(user_base: UserBase):
    try:
        async with mongo_client as db_client:
            user_dict = user_base.dict()
            time = TimeInfo().to_dict()

            document = {**user_dict, **time}
            print(time)
            # 在实际情况下，可以在这里进行用户验证、数据清洗等操作 等具体业务我们来构建不同的过滤器链路来完成
            result = await db_client.insert_document(CollectionName.USER.value, document)
            # inserted_id = str(ObjectId(result.inserted_id))
            response_data = {"inserted_id": str(result.inserted_id), "user": user_dict}
            response = ResponseModel(
                status_code=StatusCode.SUCCESS,
                timestamp=datetime.now(),
                data=[response_data]
            )
            return response
    except Exception as e:
        response = ResponseModel(
            status_code=StatusCode.DATA_ERROR,
            timestamp=datetime.now(),
            data=[{"detail": f"Failed to create user: {str(e)}"}]
        )
        return response


@user_router.get("/", response_model=ResponseModel)
async def get_all_users():
    try:
        async with mongo_client as db_client:
            documents = await db_client.find_documents(CollectionName.USER.value, query={})
            if len(documents) == 0:
                return ResponseModel(
                    status_code=StatusCode.NOT_FOUND,
                    timestamp=datetime.now(),
                    data={"info": 'No data found'}
                )
            users = []
            for doc in documents:
                user_id = str(doc.get("_id"))  # 将 ObjectId 转换为字符串
                user_data = {**doc, "id": user_id}
                user = UserBase(**user_data)

                users.append(user.to_dict())

            response = ResponseModel(
                status_code=StatusCode.SUCCESS,
                timestamp=datetime.now(),
                data=users
            )
            return response
    except Exception as e:
        response = ResponseModel(
            status_code=StatusCode.DATA_ERROR,
            timestamp=datetime.now(),
            data=[{"detail": f"Failed to retrieve users: {str(e)}"}]
        )
        return response


@user_router.get("/{user_id}", response_model=ResponseModel)
async def get_user_by_id(user_id: str):
    try:
        async with mongo_client as db_client:
            document = await db_client.find_documents(CollectionName.USER.value, {"_id": ObjectId(user_id)})
            if not document:
                return ResponseModel(
                    status_code=StatusCode.NOT_FOUND,
                    timestamp=datetime.now(),
                    data={"info": f'User with id {user_id} not found'}
                )
            users = []
            for doc in document:
                user_data = {
                    "id": str(doc.get("_id")),  # 将 ObjectId 转换为字符串
                    "username": doc.get("username"),
                    "wallet_address": doc.get("wallet_address"),
                    "role": doc.get("role"),
                    "is_active": doc.get("is_active"),
                    "time": doc.get("time"),
                    "ext": doc.get("ext")
                    # 可以根据需要添加其他字段
                }
                users.append(user_data)

            response = ResponseModel(
                status_code=StatusCode.SUCCESS,
                timestamp=datetime.now(),
                data=users
            )
            return response
    except Exception as e:
        response = ResponseModel(
            status_code=StatusCode.DATA_ERROR,
            timestamp=datetime.now(),
            data=[{"detail": f"Failed to retrieve user: {str(e)}"}]
        )
        return response


@user_router.put("/{user_id}")
async def update_user(user_id: str, user_base: UserBase):
    try:
        async with mongo_client as db_client:
            user_dict = user_base.dict()
            user_dict["id"] = user_id
            result = await db_client.update_document(CollectionName.USER.value, {"_id": ObjectId(user_id)}, user_dict)
            if result.modified_count == 1:
                response_data = {"user": user_dict}
                response = ResponseModel(
                    status_code=StatusCode.SUCCESS,
                    timestamp=datetime.now(),
                    data=[response_data]
                )
                return response
            else:
                return ResponseModel(
                    status_code=StatusCode.NOT_FOUND,
                    timestamp=datetime.now(),
                    data={"detail": f"User with id {user_id} not found"}
                )
    except Exception as e:
        response = ResponseModel(
            status_code=StatusCode.DATA_ERROR,
            timestamp=datetime.now(),
            data=[{"detail": f"Failed to update user: {str(e)}"}]
        )
        return response


@user_router.delete("/{user_id}")
async def delete_user(user_id: str):
    try:
        async with mongo_client as db_client:
            result = await db_client.delete_document(CollectionName.USER.value, {"_id": ObjectId(user_id)})
            if result.deleted_count == 1:
                response_data = {"deleted_id": user_id}
                response = ResponseModel(
                    status_code=StatusCode.SUCCESS,
                    timestamp=datetime.now(),
                    data=[response_data]
                )
                return response
            else:
                return ResponseModel(
                    status_code=StatusCode.NOT_FOUND,
                    timestamp=datetime.now(),
                    data={"detail": f"User with id {user_id} not found"}
                )
    except Exception as e:
        response = ResponseModel(
            status_code=StatusCode.DATA_ERROR,
            timestamp=datetime.now(),
            data=[{"detail": f"Failed to delete user: {str(e)}"}]
        )
        return response
