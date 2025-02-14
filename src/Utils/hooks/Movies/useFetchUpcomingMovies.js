import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies } from '../../services';
import { addUpcomingMovies } from '../../../Redux/store';

const useFetchUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcoming = useSelector((state) => state.movies.upcomingMovies);

    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await fetchUpcomingMovies();
            !upcoming && dispatch(addUpcomingMovies(movies));
        };
        fetchMovies();
    }, [dispatch]);

};

export default useFetchUpcomingMovies;