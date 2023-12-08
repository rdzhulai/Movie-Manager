from sqlalchemy.orm import Session
from os.path import splitext
from fastapi import Depends, FastAPI, HTTPException, status

from .crud import *

from .schemas import Movie

from .config import get_config
from .util import list_files

from .database import SessionLocal, engine
from .models import Base

config = get_config()

app = FastAPI()

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


@app.get("/import_movies", response_model=List[Movie])
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
        movie = add_movie(db, file, name)

        if movies is not None:
            movies.append(movie)

    return movies
