/* eslint-disable react/prop-types */
import { IMG_CDN_URL } from "../../Utils/constatnt";
const MovieCard = ({ movie }) => {
    const { poster_path } = movie;
    return (
        <div className="w-42 p-1">
            <img src={`${IMG_CDN_URL}${poster_path}`} alt={movie.title} className="h-full rounded-md" />

        </div>
    );
};

export default MovieCard;