import uuid


class UniqueIDGenerator:
    @staticmethod
    def generate_uuid():
        """
        Generate a version 4 (random) UUID and return it as a string.
        """
        return str(uuid.uuid4())

    @staticmethod
    def generate_uuid1():
        """
        Generate a version 1 (time-based) UUID and return it as a string.
        """
        return str(uuid.uuid1())

    @staticmethod
    def generate_uuid3(namespace, name):
        """
        Generate a version 3 (namespace-based) UUID and return it as a string.
        Requires a `namespace` UUID and `name` string.
        """
        return str(uuid.uuid3(namespace, name))

    @staticmethod
    def generate_uuid5(namespace, name):
        """
        Generate a version 5 (namespace-based) UUID and return it as a string.
        Requires a `namespace` UUID and `name` string.
        """
