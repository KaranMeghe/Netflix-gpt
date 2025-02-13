import { fetchMovieDetails, fetchNowPlayingMovies } from "./services";
import { store, addNowPlayingMovies, addMovieDetails } from '../Redux/store';

export const nowPlayingMoviesLoader = async () => {
    if (store.getState().movies.nowPlayingMovies) return store.getState().movies.nowPlayingMovies;
    const movies = await fetchNowPlayingMovies();
    store.dispatch(addNowPlayingMovies(movies));
    return movies;
};



export const movieDetailsLoader = async ({ params }) => {
    const { movieId } = params;

    const existingDetails = store.getState().movies.movieDetails;
    if (existingDetails?.id === movieId) return existingDetails;

    const movieDetails = await fetchMovieDetails(movieId);
    store.dispatch(addMovieDetails(movieDetails));

    return movieDetails;
};
