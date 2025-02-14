
import { fetchPopularMovies } from "../../services";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../../../Redux/store";

const useFetchPopularMovie = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((state) => state.movies.popularMovies);

    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await fetchPopularMovies();
            !popularMovies && dispatch(addPopularMovies(movies));
        };
        fetchMovies();
    }, [dispatch]);

};

export default useFetchPopularMovie;