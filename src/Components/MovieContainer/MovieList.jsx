/* eslint-disable react/prop-types */
import { MovieCard } from '../index';
const MovieList = ({ title, movies }) => {
    console.log("Movies", movies);
    return (
        <div className="px-6  text-white">
            <h2 className='text-2xl'>{title}</h2>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                <div className='flex'>
                    {movies && movies.map((movie) => {
                        return <MovieCard key={movie.id} movie={movie} />;
                    })}
                </div>
            </div>


        </div >
    );
};

export default MovieList;
