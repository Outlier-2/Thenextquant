import datetime
import enum
from datetime import datetime
from typing import Any, Dict, List

from pydantic import BaseModel


class Role:
    USER = 1
    MEMBER = 2
    ADMINER = 3


class StatusCode:
    SUCCESS = 200
    ERROR = 500
    DATA_NOT_FOUND = 400
    UNAUTHORIZED = 401
    NOT_FOUND = 404
    DATA_ERROR = 50


class TimeInfo:
    def __init__(self):
        self.created_at = datetime.now()
        self.updated_at = datetime.now()

    def update_time(self):
        self.updated_at = datetime.now()

    def to_dict(self):
        return {
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }


class ResponseModel(BaseModel):
    status_code: int
    timestamp: datetime
    data: List[Dict[str, Any]]

    class Config:
        arbitrary_types_allowed = True


# 定义数据库名称
class CollectionName(enum.Enum):
    SYSTEM_CONFIG = "sys_config"
