/* eslint-disable react/prop-types */
import { IMG_CDN_URL } from "../../Utils/constatnt";
const MovieCard = ({ movie }) => {
    const { title, overview, poster_path } = movie;
    return (
        <div className="w-42 p-1">
            <img src={`${IMG_CDN_URL}${poster_path}`} alt={movie.title} className="h-full rounded-md" />
            {/* <h3>{movie.title}</h3>
            <p>{movie.overview}</p> */}
        </div>
    );
};

export default MovieCard;