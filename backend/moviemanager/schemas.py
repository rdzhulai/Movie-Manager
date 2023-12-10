from typing import List, Optional
from pydantic import BaseModel


################################################################################
# Database models


class MovieData(BaseModel):
    id: int
    name: str

    class Config:
        from_attributes = True


class Actor(MovieData):
    pass


class Category(MovieData):
    pass


class Series(MovieData):
    pass


class Studio(MovieData):
    pass


class MovieBase(BaseModel):
    id: int
    filename: str

    class Congfig:
        from_attributes = True


class MovieFile(MovieBase):
    pass


class Movie(MovieBase):
    name: Optional[str] = None
    actors: Optional[List[Actor]] = None
    categories: Optional[List[Category]] = None
    series: Optional[List[Series]] = None
    series_number: Optional[int] = None
    studio: Optional[Studio] = None


################################################################################
# JSON schemas


class MovieProperty(BaseModel):
    name: str


class MovieUpdateSchema(BaseModel):
    name: Optional[str] = None
    series_id: Optional[int] = None
    series_number: Optional[int] = None
    studio_id: Optional[int] = None


################################################################################
# Exception models


class HTTPExceptionMessage(BaseModel):
    message: str


class HTTPExceptionSchema(BaseModel):
    detail: HTTPExceptionMessage
