import { useSelector } from "react-redux";
import MovieCard from "../MovieContainer/MovieCard";


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
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GptSuggestions;
