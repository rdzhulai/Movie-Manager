export interface StateType {
    movies: MovieFileType[];

    actors: string[];

    categories: string[];

    movieStudios: string[];

    movieSeries: string[];
}


export interface MovieFileType {
    id: number;
    filename: string;
}

export enum Actions {
    AddActor,
    AddCategory,
    AddSeries,
    AddStudio,
    SetMovies,
}

export interface AddActorAction {
    type: Actions.AddActor;
    payload: string;
}
export interface AddCategoryAction {
    type: Actions.AddCategory;
    payload: string;
}
export interface AddSeriesAction {
    type: Actions.AddSeries;
    payload: string;
}
export interface AddStudioAction {
    type: Actions.AddStudio;
    payload: string;
}
export interface SetMoviesAction {
    type: Actions.SetMovies;
    payload: MovieFileType[];
}

export type ActionType =
    | SetMoviesAction
    | AddActorAction
    | AddCategoryAction
    | AddSeriesAction
    | AddStudioAction;