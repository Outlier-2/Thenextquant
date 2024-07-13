import os
from datetime import datetime

from bson import ObjectId
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException

from domain.rule_engine.filter.abstract_filter import Filter
from infrastructure.database.MongodbClient import MongoDBClient
from infrastructure.model.system_config.SystemConfig import SystemConfig
from common.constants import ResponseModel, StatusCode, TimeInfo, CollectionName

system_config_router = APIRouter()

# 加载环境变量
load_dotenv()
connection_string = os.getenv("MONGO_URI")
database_name = os.getenv("DB_NAME")


class FilterDistinct(Filter):
    async def execute(self, data):
        async with MongoDBClient(connection_string, database_name) as db_client:
            info = await db_client.find_documents(collection_name=data.get("collection_name"), query=data.get("query"))
            return info


@system_config_router.post("/")
async def create_system_config(system_config: SystemConfig):
    try:
        async with MongoDBClient(connection_string, database_name) as db_client:
            system_config_dict = system_config.to_dict()
            time_info = TimeInfo().to_dict()
            document = {**system_config_dict, **time_info}

            # 检查是否已存在同名系统配置
            filter_distinct = FilterDistinct(name="distinctFilter")
            info = await filter_distinct.execute(data={
                "collection_name": CollectionName.SYSTEM_CONFIG.value,
                "query": {"name": system_config_dict.get('name')}
            })
            if len(info) != 0:
                raise HTTPException(status_code=StatusCode.DATA_ERROR, detail="Duplicate system configuration name")

            result = await db_client.insert_document(CollectionName.SYSTEM_CONFIG.value, document)

            # 构造响应
            response_data = {
                "inserted_id": str(result.inserted_id),
                "system_config": system_config_dict
            }
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
            data=[{"detail": f"Failed to create document: {str(e)}"}],
        )
        return response


@system_config_router.get("/", response_model=ResponseModel)
async def get_all_system_configs():
    data = []
    try:
        async with MongoDBClient(connection_string, database_name) as db_client:
            documents = await db_client.find_documents(CollectionName.SYSTEM_CONFIG.value, query={})
            if len(documents) == 0:
                return ResponseModel(
                    status_code=StatusCode.NOT_FOUND,
                    timestamp=datetime.now(),
                    data={"info": 'No data found'}
                )
            for i in documents:
                data_item = {"id": str(i.get("_id")), "name": i.get("name"), "value": i.get("value")}
                data.append(data_item)

            response = ResponseModel(
                status_code=StatusCode.SUCCESS,
                timestamp=datetime.now(),
                data=data
            )
            return response

    except Exception as e:
        response = ResponseModel(
            status_code=StatusCode.DATA_ERROR,
            timestamp=datetime.now(),
            data=[{"detail": f"Failed to retrieve documents: {str(e)}"}],
        )
        return response


@system_config_router.get("/{system_configs_id}", response_model=ResponseModel)
async def get_system_configs_id(system_config_id: str):
    try:
        async with MongoDBClient(connection_string, database_name) as db_client:
            documents = await db_client.find_documents(CollectionName.SYSTEM_CONFIG.value,
                                                       query={"_id": ObjectId(system_config_id)})
            response_data = [{
                "id": str(doc.get("_id")),
                "name": doc.get("name"),
                "key": doc.get("key"),
                "value": doc.get("value"),
                "created_at": doc.get("created_at").isoformat(),
                "updated_at": doc.get("updated_at").isoformat()
            } for doc in documents]
            if len(documents) == 0:
                return ResponseModel(
                    status_code=StatusCode.NOT_FOUND,
                    timestamp=datetime.now(),
                    data={"info": 'No data found'}
                )
            response = ResponseModel(
                status_code=StatusCode.SUCCESS,
                timestamp=datetime.now(),
                data=response_data
            )
            return response

    except Exception as e:
        response = ResponseModel(
            status_code=StatusCode.DATA_ERROR,
            timestamp=datetime.now(),
            data=[{"detail": f"Failed to retrieve documents: {str(e)}"}],
        )
        return response


@system_config_router.put("/{system_config_id}")
async def update_system_config(system_config_id: str, system_config: SystemConfig):
    try:
        async with MongoDBClient(connection_string, database_name) as db_client:
            system_config_dict = system_config.to_dict()
            update_time = datetime.now()

            document = {
                "name": system_config_dict.get("name"),
                "key": system_config_dict.get("key"),
                "value": system_config_dict.get("value"),
                "updated_at": update_time
            }
            # 更新系统配置信息
            result = await db_client.update_document(CollectionName.SYSTEM_CONFIG.value,
                                                     {"_id": ObjectId(system_config_id)}, document)

            if result.modified_count == 1:
                response_data = {
                    "updated_id": system_config_id,
                    "system_config": document
                }
                response = ResponseModel(
                    status_code=StatusCode.SUCCESS,
                    timestamp=datetime.now(),
                    data=[response_data]
                )
                return response
            else:
                raise HTTPException(status_code=StatusCode.NOT_FOUND, detail="System configuration not found")

    except Exception as e:
        response = ResponseModel(
            status_code=StatusCode.DATA_ERROR,
            timestamp=datetime.now(),
            data=[{"detail": f"Failed to update document: {str(e)}"}],
        )
        return response


@system_config_router.delete("/{system_config_id}")
async def delete_system_config(system_config_id: str):
    try:
        async with MongoDBClient(connection_string, database_name) as db_client:
            # 删除系统配置信息

            result = await db_client.delete_document(CollectionName.SYSTEM_CONFIG.value,
                                                     {"_id": ObjectId(system_config_id)})

            if result.deleted_count == 1:
                response_data = {
                    "deleted_id": system_config_id
                }
                response = ResponseModel(
                    status_code=StatusCode.SUCCESS,
                    timestamp=datetime.now(),
                    data=[response_data]
                )
                return response
            else:
                raise HTTPException(status_code=StatusCode.NOT_FOUND, detail="System configuration not found")

    except Exception as e:
        response = ResponseModel(
            status_code=StatusCode.DATA_ERROR,
            timestamp=datetime.now(),
            data=[{"detail": f"Failed to delete document: {str(e)}"}],
        )
        return response
