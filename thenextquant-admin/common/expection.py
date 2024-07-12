# from fastapi import HTTPException, Request
# from fastapi.responses import JSONResponse
# from starlette.middleware.base import BaseHTTPMiddleware


# class CustomHTTPException(HTTPException):
#     def __init__(self, status_code: int, detail: str):
#         super().__init__(status_code=status_code, detail=detail)


# async def custom_exception_handler(request: Request, exc: CustomHTTPException):
#     return JSONResponse(
#         status_code=exc.status_code,
#         content={"message": exc.detail},
#     )


# class ExceptionMiddleware(BaseHTTPMiddleware):
#     async def dispatch(self, request: Request, call_next):
#         try:
#             response = await call_next(request)
#             return response
#         except CustomHTTPException as exc:
#             return JSONResponse(
#                 status_code=exc.status_code,
#                 content={"message": exc.detail},
#             )
#         except Exception as exc:
#             return JSONResponse(
#                 status_code=500,
#                 content={"message": "Internal Server Error"},
#             )
