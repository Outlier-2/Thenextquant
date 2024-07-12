from datetime import datetime
import logging
from typing import List
from fastapi import APIRouter
from infrastructure.database.MongodbClient import db
from infrastructure.model.systemConfig.SystemConfig import SystemConfig
from common.constants import ResponseModel, StatusCode
from common.idgenerator import UniqueIDGenerator

system_config_router = APIRouter()


# Create a new SystemConfig
@system_config_router.post("/", response_model=ResponseModel)
async def create_system_config(system_config: SystemConfig):
    try:


        system_config_dict = system_config.to_dict()
        system_config_dict["created_at"] = datetime.now()
        system_config_dict["updated_at"] = datetime.now()

        insert_result = db.insert_document(
            collection_name="system_configs", document=system_config
        )

        print("我们获取到的信息是insert_result:",insert_result)
        

       
        response = ResponseModel(
            status_code=StatusCode.SUCCESS,
            timestamp=datetime.now(),
            data=[system_config_dict],
        )
        return response

    except Exception as e:
        response = ResponseModel(
            status_code=StatusCode.DATA_ERROR,
            timestamp=datetime.now(),
            data=[{"detail": f"Failed to create document: {str(e)}"}],
        )
        return response


# Get all SystemConfigs
@system_config_router.get("/", response_model=ResponseModel)
async def get_all_system_configs():
    try:
        data = []
        documents = await db.find_documents("system_configs")
        logging.info(f"Retrieved {(documents)} documents")
        for doc in documents:
            system_config = SystemConfig(
                name=doc.get("name"),
                key=doc.get("key"),
                value=doc.get("value")
               
            )
            data.append(system_config.to_dict())
        response = ResponseModel(
            status_code=StatusCode.SUCCESS,
            timestamp=datetime.now(),
            data=data,
        )
        return response

    except Exception as e:
        response = ResponseModel(
            status_code=StatusCode.DATA_ERROR,
            timestamp=datetime.now(),
            data=[{"detail": f"Failed to retrieve documents: {str(e)}"}],
        )
        return response


# Get a single SystemConfig by ID
@system_config_router.get("/{config_id}", response_model=ResponseModel)
async def get_system_config(config_id: str):
    try:
        data = []
        document = db.get_collection("system_configs").find_one(
            {"systemConfigId": config_id}
        )

        logging.info(f"Retrieved {(document)} document")
        if not document:
            return ResponseModel(
                status_code=StatusCode.NOT_FOUND,
                timestamp=datetime.now(),
                data=[{"detail": "SystemConfig not found"}],
            )
        else:
            system_config = SystemConfig(
                name=document.get("name"),
                key=document.get("key"),
                value=document.get("value"),
                systemConfigId=(
                    str(document.get("systemConfigId", ""))
                    if document.get("systemConfigId")
                    else None
                ),
            )
        response = ResponseModel(
            status_code=StatusCode.SUCCESS,
            timestamp=datetime.now(),
            data=[system_config.to_dict()],
        )
        return response

    except Exception as e:
        response = ResponseModel(
            status_code=StatusCode.DATA_ERROR,
            timestamp=datetime.now(),
            data=[{"detail": f"Failed to retrieve document: {str(e)}"}],
        )
        return response


# Update a SystemConfig by ID
@system_config_router.put("/{config_id}", response_model=ResponseModel)
async def update_system_config(config_id: str, system_config: SystemConfig):
    try:
        system_config_dict = system_config.to_dict()
        system_config_dict["updated_at"] = datetime.now()

        result = db.update_document(
            collection_name="system_configs",
            query={"systemConfigId": config_id},
            update=system_config_dict,
        )

        if result.matched_count == 0:
            return ResponseModel(
                status_code=StatusCode.NOT_FOUND,
                timestamp=datetime.now(),
                data=[{"detail": "SystemConfig not found"}],
            )

        response = ResponseModel(
            status_code=StatusCode.SUCCESS,
            timestamp=datetime.now(),
            data=[{"detail": "Document updated successfully"}],
        )
        return response

    except Exception as e:
        response = ResponseModel(
            status_code=StatusCode.DATA_ERROR,
            timestamp=datetime.now(),
            data=[{"detail": f"Failed to update document: {str(e)}"}],
        )
        return response


# Delete a SystemConfig by ID
@system_config_router.delete("/{config_id}", response_model=ResponseModel)
async def delete_system_config(config_id: str):
    try:
        result = db.delete_document(
            collection_name="system_configs", query={"systemConfigId": config_id}
        )

        if result.deleted_count == 0:
            return ResponseModel(
                status_code=StatusCode.NOT_FOUND,
                timestamp=datetime.now(),
                data=[{"detail": "SystemConfig not found"}],
            )

        response = ResponseModel(
            status_code=StatusCode.SUCCESS,
            timestamp=datetime.now(),
            data=[{"detail": "Document deleted successfully"}],
        )
        return response

    except Exception as e:
        response = ResponseModel(
            status_code=StatusCode.DATA_ERROR,
            timestamp=datetime.now(),
            data=[{"detail": f"Failed to delete document: {str(e)}"}],
        )
        return response

