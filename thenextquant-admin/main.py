import logging
from dotenv import load_dotenv
from domain.rule_engine.chain.filterchain import FilterChain
from domain.rule_engine.filter.abstract_filter import FilterA, FilterB
from infrastructure.database.MongodbClient import db
from fastapi import FastAPI
from interface.systemConfig_api import system_config_router
from config.logging.Logging import LoggingConfig

# 测试过滤器链
# fiiter = FilterA(name="filterA")
# fiiter.set_next(FilterB(name="filterB"))

# fiiter.execute(data="1")

# chain = FilterChain()
# chain.add_filter(FilterA(name="filterA"))
# chain.add_filter(FilterB(name="filterB"))
# chain.execute(data="1")
# 加载环境变量
# 创建 LoggingConfig 实例并设置日志
logging_config = LoggingConfig(console_level=logging.DEBUG, file_level=logging.INFO)
logging_config.setup_logging()

logger = logging.getLogger(__name__)


# 启动应用
app = FastAPI()
# 预设系统
app.include_router(system_config_router, prefix="/system_config")
