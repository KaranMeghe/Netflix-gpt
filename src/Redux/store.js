import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { addUser, removeUser } from "./slices/userSlice";
import { movieReducer } from "./slices/movieSlice";
import { addNowPlayingMovies } from "./slices/movieSlice";

const store = configureStore({
    reducer: {
        users: userReducer,
        movies: movieReducer
    }
});

export { store, addUser, removeUser, addNowPlayingMovies };