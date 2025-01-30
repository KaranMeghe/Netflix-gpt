import axios from 'axios';
import { API_OPTIONS } from './constatnt';

export const fetchNowPlayingMovies = async (page = 1) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?&${page}`, API_OPTIONS);
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching now playing movies:", error.message);
        return null;
    }
};
