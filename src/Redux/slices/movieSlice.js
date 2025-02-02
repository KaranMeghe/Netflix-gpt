import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailerId: null,
        trailerMute: true,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerId: (state, action) => {
            state.trailerId = action.payload;
        },
        toggleMute: (state) => {
            state.trailerMute = !state.trailerMute;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
    }
});

export const { addNowPlayingMovies, addTrailerId, toggleMute, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;