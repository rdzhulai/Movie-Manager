import os
from typing import List

from .config import get_config

from .models import Movie

config = get_config()


def list_files(path: str) -> List[str]:
    try:
        files = sorted(os.listdir(path))
    except:
        raise Exception(f"Unable to read the path {path}")

    return files


def migrate_file(movie: Movie, adding: bool = True):
    base_current = None
    base_new = None

    if adding:
        base_current = config["imports"]
        base_new = config["movies"]
    else:
        base_current = config["movies"]
        base_new = config["imports"]

    path_current = base_current + "/" + movie.filename
    path_new = base_new + "/" + movie.filename

    os.rename(path_current, path_new)
