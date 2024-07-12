from abc import ABC, abstractmethod


class Filter(ABC):
    def __init__(self, name):
        self.name = name  # 添加name属性
        self.next_filter = None  # 初始化下一个Filter为空

    @abstractmethod
    def execute(self, data):
        pass

    def set_next(self, next_filter):
        self.next_filter = next_filter


class FilterA(Filter):
    def execute(self, data):
        data = f"{data} -> {self.name}"
        print(f"Executing {self.name} with data: {data}")
        if self.next_filter:
            return self.next_filter.execute(data)
        return data

class FilterB(Filter):
    def execute(self, data):
        data = f"{data} -> {self.name}"
        print(f"Executing {self.name} with data: {data}")

