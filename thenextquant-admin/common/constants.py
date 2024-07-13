import datetime
import enum
from datetime import datetime
from typing import Any, Dict, List

from pydantic import BaseModel


class Role(enum.Enum):
    USER = 1
    MEMBER = 2
    ADMINER = 3


class StatusCode(enum.Enum):
    SUCCESS = 200
    ERROR = 500
    DATA_NOT_FOUND = 400
    UNAUTHORIZED = 401
    NOT_FOUND = 404
    DATA_ERROR = 50


class TimeInfo(BaseModel):
    created_at: datetime = datetime.now()  # 定义并初始化 created_at 字段
    updated_at: datetime = datetime.now()  # 定义并初始化 updated_at 字段

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
    USER = "user"
