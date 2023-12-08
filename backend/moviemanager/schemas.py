from typing import List, Optional
from pydantic import BaseModel


class MovieBase(BaseModel):
    id: int
    filename: str


class MovieData(BaseModel):
    id: int
    name: str

    class Config:
        from_attributes = True


class Actor(MovieBase):
    pass


class Category(MovieBase):
    pass


class Series(MovieBase):
    pass


class Studio(MovieBase):
    pass


class Movie(MovieBase):
    name: Optional[str] = None
    actors: Optional[List[Actor]] = None
    categories: Optional[List[Category]] = None
    series: Optional[List[Series]] = None
    series_number: Optional[int] = None
    studio: Optional[Studio] = None

    class Config:
        from_attributes = True
