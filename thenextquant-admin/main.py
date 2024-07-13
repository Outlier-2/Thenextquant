import logging
import os
from http.client import HTTPException

from dotenv import load_dotenv
from domain.rule_engine.chain.filterchain import FilterChain
from domain.rule_engine.filter.abstract_filter import FilterA, FilterB
# from infrastructure.database.MongodbClient import db, MongoDBClient
from fastapi import FastAPI

from infrastructure.database.MongodbClient import MongoDBClient
from interface.systemConfigAPI import system_config_router
from config.logging.Logging import LoggingConfig
from interface.userAPI import user_router


# 测试过滤器链
# filter = FilterA(name="filterA")
# filter.set_next(FilterB(name="filterB"))

# filter.execute(data="1")

# chain = FilterChain()
# chain.add_filter(FilterA(name="filterA"))
# chain.add_filter(FilterB(name="filterB"))
# chain.execute(data="1")
# 加载环境变量


# 数据库配置
# 初始化 MongoDB 客户端
async def init_mongo():
    connection_string = os.getenv("MONGO_URI")
    database_name = os.getenv("DB_NAME")
    mongo_client = MongoDBClient(connection_string, database_name)
    await mongo_client.connect()


# 创建 LoggingConfig 实例并设置日志
logging_config = LoggingConfig(console_level=logging.DEBUG, file_level=logging.INFO)
logging_config.setup_logging()

logger = logging.getLogger(__name__)

# 启动应用
app = FastAPI()


# 挂载数据库
@app.on_event("startup")
async def startup_event():
    await init_mongo()


@app.on_event("shutdown")
async def shutdown_db_client():
    init_mongo().close()


# 路由
app.include_router(system_config_router, prefix="/system_config", tags=["system_config"])
app.include_router(user_router, prefix="/user", tags=["user"])
