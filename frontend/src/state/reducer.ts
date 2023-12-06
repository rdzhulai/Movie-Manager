import { ActionType, Actions, StateType } from "../types/state";

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
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