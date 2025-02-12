import axios from 'axios';
import { API_OPTIONS } from './constatnt';

export const fetchNowPlayingMovies = async (page = 1) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?${page}`, API_OPTIONS);
        return data.results;
    } catch (error) {
        console.error("Error fetching now playing movies:", error.message);
        return null;
    }
};

export const fetchPopularMovies = async (page = 1) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?${page}`, API_OPTIONS);
        return data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error.message);
        return null;
    }
};

export const fetchTopRatedMovies = async (page = 1) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?${page}`, API_OPTIONS);
        return data.results;
    } catch (error) {
        console.error("Error fetching top rated movies:", error.message);
        return null;
    }
};

export const fetchUpcomingMovies = async (page = 1) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?${page}`, API_OPTIONS);
        return data.results;
    } catch (error) {
        console.error("Error fetching upcoming movies:", error.message);
        return null;
    }
};

export const fetchSearchMovies = async (movie, page = 1) => {
    try {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=${page}`,
            API_OPTIONS
        );
        return data.results || [];

    } catch (error) {
        console.error(`Error fetching search movies for "${movie}":`, error);
        throw error;
    }
};
