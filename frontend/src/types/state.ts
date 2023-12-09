export interface StateType {
    movies: MovieFileType[];
    actors: ActorType[];
    categories: CategoryType[];
    movieStudios: StudioType[];
    movieSeries: SeriesType[];
}

export interface MovieDataBaseType {
    id: number;
    name: string;
}

export interface ActorType extends MovieDataBaseType { }
export interface CategoryType extends MovieDataBaseType { }
export interface StudioType extends MovieDataBaseType { }
export interface SeriesType extends MovieDataBaseType { }

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
    SetAvailableActors,
    SetCategories,
    SetSeries,
    SetStudios,
}

export interface AddActorAction {
    type: Actions.AddActor;
    payload: ActorType;
}
export interface AddCategoryAction {
    type: Actions.AddCategory;
    payload: CategoryType;
}
export interface AddSeriesAction {
    type: Actions.AddSeries;
    payload: SeriesType;
}
export interface AddStudioAction {
    type: Actions.AddStudio;
    payload: StudioType;
}
export interface SetMoviesAction {
    type: Actions.SetMovies;
    payload: MovieFileType[];
}
export interface SetAvailableActorsAction {
    type: Actions.SetAvailableActors;
    payload: ActorType[];
}

export interface SetCategoriesAction {
    type: Actions.SetCategories;
    payload: CategoryType[];
}

export interface SetSeriesAction {
    type: Actions.SetSeries;
    payload: SeriesType[];
}

export interface SetStudiosAction {
    type: Actions.SetStudios;
    payload: StudioType[];
}
export type ActionType =
    | SetCategoriesAction
    | SetSeriesAction
    | SetStudiosAction
    | SetAvailableActorsAction
    | SetMoviesAction
    | AddActorAction
    | AddCategoryAction
    | AddSeriesAction
    | AddStudioAction;