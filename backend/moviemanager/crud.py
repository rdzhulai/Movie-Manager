from typing import List, Optional

from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from . import models, util


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
) -> models.Movie:
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
