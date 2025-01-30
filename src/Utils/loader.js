import { fetchNowPlayingMovies } from "./services";

export const nowPlayingMoviesLoader = () => {
    const nowPlayingMovies = fetchNowPlayingMovies();
    return nowPlayingMovies;
};