import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listedmovies: [],
    wmovies: [],
    Active: false
}

const watchlistSlice = createSlice({
    name: 'listedmovies',
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.listedmovies.push(action.payload);
        },
        removeMovies: (state, action) => {
            state.listedmovies = state.listedmovies.filter((item) => item !== action.payload);
        },
        setwatchlist: (state, action) => {
            state.wmovies = action.payload;
        },
        activewatchlist: (state, action) => {
            state.Active = action.payload;
        }
    }
});


export const { addMovies, removeMovies, setwatchlist, activewatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;