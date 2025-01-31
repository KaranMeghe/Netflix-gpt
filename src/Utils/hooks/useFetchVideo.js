import { useEffect } from "react";
import axios from "axios";
import { API_OPTIONS } from "../constatnt";
import { useDispatch } from "react-redux";
import { addTrailerId } from "../../Redux/store";

export const useFetchVideo = (movieId) => {
    const dispatch = useDispatch();
    const fetchVideo = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?`, API_OPTIONS);
            const trailer = data.results.filter((video) => video.type === "Trailer")[0];
            dispatch(addTrailerId(trailer.key));
        } catch (error) {
            console.error("Error fetching video:", error.message);
        }
    };

    useEffect(() => {
        fetchVideo();
    }, []);
};
