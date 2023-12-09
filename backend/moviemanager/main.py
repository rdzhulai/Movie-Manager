from typing import List
from sqlalchemy.orm import Session
from os.path import splitext
from fastapi import Depends, FastAPI, HTTPException, status

from . import schemas, crud

from .config import get_config
from .util import list_files

from .database import SessionLocal, engine
from .models import Base
from fastapi.middleware.cors import CORSMiddleware

config = get_config()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origin_regex=r"https?://(?:127\.0\.1|localhost):300[0-9]",
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


@app.get("/")
def hello():
    return "Hello FastAPI"


@app.get("/movies", response_model=List[schemas.MovieFile])
def get_movies(db: Session = Depends(get_db)):
    return crud.get_all_movies(db)


@app.post("/movies", response_model=List[schemas.Movie])
def import_movies(db: Session = Depends(get_db)):
    try:
        files = list_files(config["imports"])
    except Exception as e:
        raise HTTPException(
            status.HTTP_500_INTERNAL_SERVER_ERROR, detail={"message": str(e)}
        )
    movies = []

    for file in files:
        name, _ = splitext(file)
        movie = crud.add_movie(db, file, name)

        if movies is not None:
            movies.append(movie)

    return movies
