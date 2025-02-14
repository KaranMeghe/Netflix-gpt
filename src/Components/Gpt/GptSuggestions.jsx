import { useSelector } from "react-redux";
import MovieCard from "../MovieContainer/MovieCard";
import { Link } from "react-router-dom";

const GptSuggestions = () => {
    const { searchResults, isLoading } = useSelector((state) => state.gpt);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center mt-4">
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!searchResults || searchResults.length === 0) return null;
    return (
        <div className="w-full overflow-x-auto bg-black p-6">
            <div className="flex gap-4 w-max">
                {searchResults.map((movie) => (
                    <div key={movie.id} className="min-w-[200px]">
                        <Link to={`/moviedetails/${movie.id}`}>
                            <MovieCard movie={movie} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GptSuggestions;
