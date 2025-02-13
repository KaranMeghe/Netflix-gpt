/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { MovieCard } from '../index';
const MovieList = ({ title, movies }) => {

    return (
        <div className="p-6  text-white ">
            <h2 className='text-2xl'>{title}</h2>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                <div className='flex'>
                    {movies && movies.map((movie) => {
                        return <Link key={movie.id} to={`/moviedetails/${movie.id}`}>
                            <MovieCard key={movie.id} movie={movie} />
                        </Link>;
                    })}
                </div>
            </div>


        </div >
    );
};

export default MovieList;
