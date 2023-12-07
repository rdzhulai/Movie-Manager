import { ActionType, Actions, StateType } from "../types/state";

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case Actions.AddActor:
            return { ...state, actors: [...state.actors, action.payload] }
        case Actions.AddCategory:
            return { ...state, categories: [...state.categories, action.payload] }
        case Actions.AddSeries:
            return { ...state, series: [...state.movieSeries, action.payload] }
        case Actions.AddStudio:
            return { ...state, studio: [...state.movieStudios, action.payload] }
        case Actions.SetSelectedMovieId:
            return {
                ...state,
                selectedMovieId: action.payload
            }
        default:
            return state;
    }
};

export default reducer;