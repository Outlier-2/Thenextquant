import logging
from logging.config import dictConfig


class LoggingConfig:
    def __init__(
        self, console_level=logging.INFO, file_level=logging.INFO, file_name="app.log"
    ):
        self.console_level = console_level
        self.file_level = file_level
        self.file_name = file_name

    def get_config(self):
        return {
            "version": 1,
            "disable_existing_loggers": False,
            "formatters": {
                "default": {
                    "format": "%(asctime)s - %(name)s - \033[32m%(levelname)s\033[0m - %(message)s"
                },
            },
            "handlers": {
                "console": {
                    "class": "logging.StreamHandler",
                    "formatter": "default",
                    "level": self.console_level,
                },
                "file": {
                    "class": "logging.FileHandler",
                    "filename": self.file_name,
                    "formatter": "default",
                    "level": self.file_level,
                },
            },
            "loggers": {
                "": {
                    "handlers": ["console", "file"],
                    "level": logging.DEBUG,  # Adjust this as needed
                },
            },
        }

    def setup_logging(self):
        dictConfig(self.get_config())


