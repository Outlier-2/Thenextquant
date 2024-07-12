from dataclasses import dataclass
from typing import Optional
from pydantic import BaseModel, constr

@dataclass
class SystemConfig(BaseModel):
    name: constr(min_length=1, max_length=32)
    key: str
    value: str

    def to_dict(self):
        return {
            "ngame": self.name,
            "key": self.key,
            "value": self.value,
        }

    @classmethod
    def from_dict(cls, data: dict):
        return cls(**data)
