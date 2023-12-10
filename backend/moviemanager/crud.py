from typing import List, Optional

from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from . import models, util, schemas


#######################################################################


def get_all_actors(db: Session) -> List[models.Actor]:
    return db.query(models.Actor).order_by(models.Actor.name).all()


def get_all_categories(db: Session) -> List[models.Category]:
    return db.query(models.Category).order_by(models.Category.name).all()


def get_all_studios(db: Session) -> List[models.Studio]:
    return db.query(models.Studio).order_by(models.Studio.name).all()


def get_all_series(db: Session) -> List[models.Series]:
    return db.query(models.Series).order_by(models.Series.name).all()


def get_all_movies(db: Session) -> List[models.Movie]:
    return (
        db.query(models.Movie)
        .outerjoin(models.Studio)
        .outerjoin(models.Series)
        .order_by(
            models.Movie.processed,
            models.Studio.name,
            models.Series.name,
            models.Movie.name,
        )
        .all()
    )


def get_movie(db: Session, id: int) -> models.Movie:
    return db.query(models.Movie).where(models.Movie.id == id).first()


######################################################################


def add_actor(db: Session, name: str) -> models.Actor | None:
    actor = models.Actor(name=name)
    try:
        db.add(actor)
        db.commit()
        db.refresh(actor)
    except IntegrityError:
        db.rollback()
        return None
    return actor


def add_category(db: Session, name: str) -> models.Category | None:
    category = models.Category(name=name)
    try:
        db.add(category)
        db.commit()
        db.refresh(category)
    except IntegrityError:
        db.rollback()
        return None
    return category


def add_series(db: Session, name: str) -> models.Series | None:
    series = models.Series(name=name)
    try:
        db.add(series)
        db.commit()
        db.refresh(series)
    except IntegrityError:
        db.rollback()
        return None
    return series


def add_studio(db: Session, name: str) -> models.Studio | None:
    studio = models.Studio(name=name)
    try:
        db.add(studio)
        db.commit()
        db.refresh(studio)
    except IntegrityError:
        db.rollback()
        return None
    return studio


def add_movie(
    db: Session,
    filename: str,
    name: str,
    studio_id: Optional[int] = None,
    series_id: Optional[int] = None,
    series_number: Optional[int] = None,
    actors: Optional[List[models.Actor]] = None,
    categories: Optional[List[models.Category]] = None,
    processed: Optional[bool] = False,
) -> models.Movie | None:
    """Adds a movie to the database.

    Args:
        db: The database session.
        filename: The movie's filename.
        name: The movie's name.
        studio_id: ID of the studio for this movie.
        series_id: ID of the series for this movie.
        series_number: Number in the series.
        actors: List of Actor objects in this movie.
        categories: List of Category objects in this movie.
        processed: True if the movie has been processed; false otherwise.

    Returns:
        movie: The new Movie object.

    Raises:
        DuplicateEntryException: Movie conflicts with existing.
    """

    movie = models.Movie(
        filename=filename,
        name=name,
        studio_id=studio_id,
        series_id=series_id,
        series_number=series_number,
        processed=processed,
    )

    if actors is not None:
        movie.actors = actors

    if categories is not None:
        movie.categories = categories

    try:
        db.add(movie)
        db.commit()
        db.refresh(movie)
    except IntegrityError:
        db.rollback()
        return None

    util.migrate_file(movie)

    return movie


def update_movie(
    db: Session, id: int, data: schemas.MovieUpdateSchema
) -> models.Movie | None:
    movie = get_movie(db, id)

    if movie is None:
        return None

    if (
        data.name == movie.name
        and data.studio_id == movie.studio_id
        and data.series_id == movie.series_id
        and data.series_number == movie.series_number
    ):
        return movie

    movie.name = data.name  # type: ignore
    movie.studio_id = data.studio_id  # type: ignore
    movie.series_id = data.series_id  # type: ignore
    movie.series_number = data.series_number  # type: ignore

    if not movie.processed:  # type: ignore
        movie.processed = True  # type: ignore

    db.commit()
    db.refresh(movie)

    return movie
