from dataclasses import dataclass
from typing import Optional
from Infrastructure.model.User import UserBase

@dataclass
class AdminUser:
    user: UserBase
    ext: Optional[str] = None
