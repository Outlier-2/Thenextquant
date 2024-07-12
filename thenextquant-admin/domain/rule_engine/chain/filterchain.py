class FilterChain:
    def __init__(self):
        self.filters = []

    def add_filter(self, filter_instance):
        if self.filters:
            self.filters[-1].set_next(filter_instance)
        self.filters.append(filter_instance)

    def execute(self, data):
        if self.filters:
            self.filters[0].execute(data)
