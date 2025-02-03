
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import { MainContainer, SecondaryContainer } from '../index';
import { useFetchPopularMovie, useFetchTopRatedMovies, useFetchUpcomingMovies } from '../../Utils/hooks/Movies/index';

const Browse = () => {
    // eslint-disable-next-line no-unused-vars
    const nowPlayingMovies = useLoaderData();
    useFetchPopularMovie();
    useFetchTopRatedMovies();
    useFetchUpcomingMovies();
    return (
        <div className='relative'>
            <Header />
            {/* 
             Main Container 
               - Video Background
               - Video Title

             Secondary Container 
                 - MovieList * n
                   - Cards * n
             */}
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
};

export default Browse;
