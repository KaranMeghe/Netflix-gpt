import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedMovies } from "../../services";
import { useEffect } from "react";
import { addTopRatedMovies } from "../../../Redux/store";

const useFetchTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRated = useSelector((state) => state.movies.topRatedMovies);

    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await fetchTopRatedMovies();
            !topRated && dispatch(addTopRatedMovies(movies));
        };
        fetchMovies();
    }, [dispatch]);
};

export default useFetchTopRatedMovies;