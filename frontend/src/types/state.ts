export interface StateType {
    movies: string[];
    actors: string[];
    categories: string[];
    selectedMovieId: number | null;
    selectedActors: string[] | null;
    selectedCategories: string[] | null;
    movieName: string | null;
    movieStudioId: number | null;
    movieSeriesId: number | null;
    movieSeriesNumber: number | null;
}

export enum Actions {
    SetSelectedMovieId
}

export interface SetSelectedMovieIdAction {
    type: Actions.SetSelectedMovieId;
    payload: number | null;
}

export type ActionType = SetSelectedMovieIdAction;