import { fetchNowPlayingMovies } from "./services";
import { store, addNowPlayingMovies } from '../Redux/store';

// export const nowPlayingMoviesLoader = async () => {
//     const movies = await fetchNowPlayingMovies();
//     store.dispatch(addNowPlayingMovies(movies));
//     return movies;
// };

export const nowPlayingMoviesLoader = async () => {
    if (store.getState().movies.nowPlayingMovies) return store.getState().movies.nowPlayingMovies;
    const movies = await fetchNowPlayingMovies();
    store.dispatch(addNowPlayingMovies(movies));
    return movies;
};
