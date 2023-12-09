import { ActionType, Actions, StateType } from "../types/state";

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case Actions.AddActor:
            return { ...state, actors: [...state.actors, action.payload] }
        case Actions.AddCategory:
            return { ...state, categories: [...state.categories, action.payload] }
        case Actions.AddSeries:
            return { ...state, movieSeries: [...state.movieSeries, action.payload] }
        case Actions.AddStudio:
            return { ...state, movieStudios: [...state.movieStudios, action.payload] }
        case Actions.SetMovies:
            return { ...state, movies: [...action.payload] }
        case Actions.SetAvailableActors:
            return { ...state, actors: [...action.payload] }
        case Actions.SetCategories:
            return { ...state, categories: [...action.payload] }
        case Actions.SetSeries:
            return { ...state, movieSeries: [...action.payload] }
        case Actions.SetStudios:
            return { ...state, movieStudios: [...action.payload] }
        default:
            return state;
    }
};

export default reducer;