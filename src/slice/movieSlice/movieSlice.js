import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    genres: [],
    currentPage: 1
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setGenres: (state, action) => {
            state.genres = action.payload;
        },
        setcurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    }
});


export const { setMovies, setGenres, setcurrentPage } = movieSlice.actions;

export default movieSlice.reducer;