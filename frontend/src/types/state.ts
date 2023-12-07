export interface StateType {
    movies: string[];
    selectedMovieId: number | null;

    actors: string[];
    selectedActors: string[] | null;

    categories: string[];
    selectedCategories: string[] | null;

    movieName: string | null;

    movieStudios: string[];
    movieStudioId: number | null;

    movieSeries: string[];
    movieSeriesId: number | null;

    movieSeriesNumber: number | null;
}

export enum Actions {
    SetSelectedMovieId,
    AddActor,
    AddCategory,
    AddSeries,
    AddStudio
}

export interface SetSelectedMovieIdAction {
    type: Actions.SetSelectedMovieId;
    payload: number | null;
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

export type ActionType = SetSelectedMovieIdAction | AddActorAction | AddCategoryAction | AddSeriesAction | AddStudioAction;