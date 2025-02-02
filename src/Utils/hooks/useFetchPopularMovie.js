
import { fetchPopularMovies } from "../services";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../../Redux/store";

const useFetchPopularMovie = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await fetchPopularMovies();
            dispatch(addPopularMovies(movies));
        };
        fetchMovies();
    }, [dispatch]);

};

export default useFetchPopularMovie;