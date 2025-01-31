import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
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
        }
    }
});

export const { addNowPlayingMovies, addTrailerId, toggleMute } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;