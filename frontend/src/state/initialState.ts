import { StateType } from "../types/state";

export const initialState: StateType = {
    movies: [
        "Harry Poter and the Sorcerer's Stone",
        "The Dark Knight Rises",
        "Avatar",
        "Catwoman",
        "The Wizard of Oz"
    ],
    actors: [],
    categories: ["fantasy", "drama", "horror", "cat"],
    selectedMovieId: null,
    selectedActors: null,
    selectedCategories: null,
    movieName: null,
    movieStudioId: null,
    movieSeriesId: null,
    movieSeriesNumber: null,
    movieStudios: [],
    movieSeries: []
};