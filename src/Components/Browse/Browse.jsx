import { useLoaderData } from 'react-router-dom';
import { GptSearch, } from '../index';
import { MainContainer, SecondaryContainer } from '../index';
import { useFetchPopularMovie, useFetchTopRatedMovies, useFetchUpcomingMovies } from '../../Utils/hooks/Movies/index';
import useHeaderLogic from '../../Utils/hooks/header/useHeaderLogic';

const Browse = () => {
    const nowPlayingMovies = useLoaderData();
    useFetchPopularMovie();
    useFetchTopRatedMovies();
    useFetchUpcomingMovies();
    const { showGptSearch } = useHeaderLogic();

    return (
        <div className='relative'>
            {showGptSearch ? (
                <GptSearch />
            ) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}
        </div>
    );
};

export default Browse;
