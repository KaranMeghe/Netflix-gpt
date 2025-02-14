import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../Utils/constatnt";
import { Button } from '../../Ui/index';
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../../Redux/store";

const MovieDetails = () => {
    const movie = useSelector((state) => state.movies.movieDetails);
    const dispatch = useDispatch();

    if (!movie) {
        return <div className="text-white text-center">Loading movie details...</div>;
    }

    const { poster_path, title, overview, genres = [], release_date } = movie;

    return (
        <div className="px-10 pt-20 bg-black h-full md:h-screen w-screen"> {/* Add padding-top to prevent overlap */}
            <Link to="/browse">
                <Button
                    className="text-white bg-red-500 px-4 my-10 border border-red-300 rounded"
                    onClick={() => dispatch(addMovieDetails(null))}
                >
                    Home
                </Button>
            </Link>

            <div className="flex justify-around flex-col md:flex-row items-center"> {/* Reduce height */}
                {poster_path && (
                    <img src={`${IMG_CDN_URL}${poster_path}`} alt={`${title} poster`} className="w-96" />
                )}
                <div className="flex flex-col justify-center gap-6 text-white p-10 w-full">
                    <h2 className="text-4xl">{title}</h2>
                    <p className="text-xl">{overview}</p>
                    <p className="font-bold text-md md:text-2xl">Release date: {release_date}</p>
                    <div className="flex flex-wrap gap-6">
                        {genres.length > 0
                            ? genres.map((gen) => (
                                <Button key={gen.id} className="border border-gray-400 rounded-full px-4">
                                    {gen.name}
                                </Button>
                            ))
                            : <p>No genres available</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MovieDetails;
