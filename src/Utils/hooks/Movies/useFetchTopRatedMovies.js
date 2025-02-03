import { useDispatch } from "react-redux";
import { fetchTopRatedMovies } from "../../services";
import { useEffect } from "react";
import { addTopRatedMovies } from "../../../Redux/store";

const useFetchTopRatedMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await fetchTopRatedMovies();
            console.log("Top Rated Movies", movies);
            dispatch(addTopRatedMovies(movies));
        };
        fetchMovies();
    }, [dispatch]);
};

export default useFetchTopRatedMovies;