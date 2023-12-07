export interface StateType {
    movies: string[];

    actors: string[];

    categories: string[];

    movieStudios: string[];

    movieSeries: string[];
}

export enum Actions {
    AddActor,
    AddCategory,
    AddSeries,
    AddStudio
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

export type ActionType = AddActorAction | AddCategoryAction | AddSeriesAction | AddStudioAction;