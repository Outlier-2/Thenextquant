from dataclasses import dataclass
from datetime import datetime, timedelta
from typing import Optional

from Infrastructure.model.user.User import UserBase




# 定义会员用户模型
@dataclass
class MemberUser:
    user: UserBase  # 一对一关联到UserBase模型
    membership_start_date: datetime = datetime.now()
    membership_end_date: datetime = datetime.now() + timedelta(
        days=365
    )  # 假设会员有效期为一年
    ext: Optional[str] = None  # 扩展信息

   