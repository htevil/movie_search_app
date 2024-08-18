import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from '../slice/movieSlice/movieSlice'
import watchlistReducer from '../slice/watchlistSlice/watchlistSlice'

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        listedmovies: watchlistReducer
    }
})
