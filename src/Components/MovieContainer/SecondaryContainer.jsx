import { useSelector } from "react-redux";
import { MovieList } from "../index";
import { useMemo } from "react";

const SecondaryContainer = () => {
    const movies = useSelector((state) => state.movies);

    // xl:top-170 2xl:top-210
    // Memoize MovieList to prevent unnecessary re-renders
    const movieList = useMemo(() => {
        return <div className="w-full bg-black ">
            <div className="md:-mt-1 xl:-mt-34 2xl:-mt-56 z-20 relative">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
            </div>
        </div>;
    }, [movies.nowPlayingMovies, movies.popularMovies, movies.topRatedMovies, movies.upcomingMovies]);

    return <div>{movieList}</div>;
};

export default SecondaryContainer;