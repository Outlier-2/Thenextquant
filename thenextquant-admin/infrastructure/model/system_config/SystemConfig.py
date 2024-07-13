from dataclasses import dataclass


@dataclass
class SystemConfig():
    name: str
    key: str
    value: str

    def to_dict(self):
        return {
            "name": self.name,
            "key": self.key,
            "value": self.value,
        }

    @classmethod
    def from_dict(cls, data: dict):
        return cls(**data)
