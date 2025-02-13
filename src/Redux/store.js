import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { addUser, removeUser } from "./slices/userSlice";
import { movieReducer } from "./slices/movieSlice";
import { addNowPlayingMovies, addTrailerId, toggleMute, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addMovieDetails } from "./slices/movieSlice";
import { gptReducer, toggleGptSearch, addSearchResults, setIsLoading } from "./slices/gptSlice";
import { configReducer, changeLang } from "./slices/configSlice";


const store = configureStore({
    reducer: {
        users: userReducer,
        movies: movieReducer,
        gpt: gptReducer,
        config: configReducer
    }
});

export { store, addUser, removeUser, addNowPlayingMovies, addTrailerId, toggleMute, addPopularMovies, addTopRatedMovies, addUpcomingMovies, toggleGptSearch, changeLang, addSearchResults, setIsLoading, addMovieDetails };