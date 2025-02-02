import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUpcomingMovies } from '../services';
import { addUpcomingMovies } from '../../Redux/store';

const useFetchUpcomingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await fetchUpcomingMovies();
            dispatch(addUpcomingMovies(movies));
        };
        fetchMovies();
    }, [dispatch]);

};

export default useFetchUpcomingMovies;