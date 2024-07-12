from pydantic import BaseModel, constr
from datetime import datetime
from typing import Optional

from Common.constants import Role, TimeInfo


"""
  这是用户基本模型,它继承了BaseModel,并包含了一些字段,例如用户名、钱包地址、角色、是否激活等。

  ## 字段说明
    
  - username: 用户名,类型为constr(min_length=1, max_length=128)
  - wallet_address: 钱包地址,类型为constr(max_length=256)
  - role: 角色,类型为Role枚举
  - is_active: 是否激活,类型为bool
  - ext: 扩展字段,类型为Optional[str]
  - time: 用户的时间信息,类型为UserTimeInfo

"""


class UserBase(BaseModel):
    username: constr(min_length=1, max_length=64)  # type: ignore
    wallet_address: constr(max_length=256)  # type: ignore
    role: Role = Role.USER
    is_active: bool = True
    time: TimeInfo = TimeInfo().to_dict()
    ext: Optional[str] = None

    class Config:
        arbitrary_types_allowed = True

    def update_to_memberUser(self):
        self.role = Role.MEMBERUSER

    def update_to_adminUser(self):
        self.role = Role.ADMINUSER
