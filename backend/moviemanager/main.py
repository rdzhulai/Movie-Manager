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


@app.get("/actors", response_model=List[schemas.Actor])
def get_actors(db: Session = Depends(get_db)):
    return crud.get_all_actors(db)


@app.get("/movies", response_model=List[schemas.MovieFile])
def get_movies(db: Session = Depends(get_db)):
    return crud.get_all_movies(db)


@app.get("/categories", response_model=List[schemas.Category])
def get_categories(db: Session = Depends(get_db)):
    return crud.get_all_categories(db)


@app.get("/studios", response_model=List[schemas.Studio])
def get_studios(db: Session = Depends(get_db)):
    return crud.get_all_studios(db)


@app.get("/series", response_model=List[schemas.Series])
def get_series(db: Session = Depends(get_db)):
    return crud.get_all_series(db)


@app.post(
    "/movies",
    response_model=List[schemas.Movie],
    responses={
        500: {"model": schemas.HTTPExceptionSchema, "description": "A fatal error"}
    },
)
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


@app.post(
    "/actors",
    response_model=schemas.Actor,
    responses={
        409: {
            "model": schemas.HTTPExceptionSchema,
            "description": "Attempt to add duplicate actor",
        }
    },
)
def add_actor(data: schemas.MovieProperty, db: Session = Depends(get_db)):
    actor = crud.add_actor(db, data.name)
    if actor is None:
        raise HTTPException(
            status.HTTP_409_CONFLICT,
            detail={"message": f"Actor {data.name} already in database"},
        )
    return actor


@app.post(
    "/categories",
    response_model=schemas.Category,
    responses={
        409: {
            "model": schemas.HTTPExceptionSchema,
            "description": "Attempt to add duplicate category",
        }
    },
)
def add_category(data: schemas.MovieProperty, db: Session = Depends(get_db)):
    category = crud.add_category(db, data.name)
    if category is None:
        raise HTTPException(
            status.HTTP_409_CONFLICT,
            detail={"message": f"Category {data.name} already in database"},
        )
    return category


@app.post(
    "/studios",
    response_model=schemas.Studio,
    responses={
        409: {
            "model": schemas.HTTPExceptionSchema,
            "description": "Attempt to add duplicate studio",
        }
    },
)
def add_studio(data: schemas.MovieProperty, db: Session = Depends(get_db)):
    studio = crud.add_studio(db, data.name)
    if studio is None:
        raise HTTPException(
            status.HTTP_409_CONFLICT,
            detail={"message": f"Studio {data.name} already in database"},
        )
    return studio


@app.post(
    "/series",
    response_model=schemas.Series,
    responses={
        409: {
            "model": schemas.HTTPExceptionSchema,
            "description": "Attempt to add duplicate series",
        }
    },
)
def add_category(data: schemas.MovieProperty, db: Session = Depends(get_db)):
    series = crud.add_series(db, data.name)
    if series is None:
        raise HTTPException(
            status.HTTP_409_CONFLICT,
            detail={"message": f"Series {data.name} already in database"},
        )
    return series
