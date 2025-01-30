import { fetchNowPlayingMovies } from "./services";
import { store, addNowPlayingMovies } from '../Redux/store';

export const nowPlayingMoviesLoader = async () => {
    const movies = await fetchNowPlayingMovies(); // waiting for data
    store.dispatch(addNowPlayingMovies(movies)); // dispatching actual data
    return movies;
};