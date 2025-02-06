
import { useLoaderData } from 'react-router-dom';
import { Header, GptSearch } from '../index';
import { MainContainer, SecondaryContainer } from '../index';
import { useFetchPopularMovie, useFetchTopRatedMovies, useFetchUpcomingMovies } from '../../Utils/hooks/Movies/index';
import useHeaderLogic from '../../Utils/hooks/header/useHeaderLogic';

const Browse = () => {
    // eslint-disable-next-line no-unused-vars
    const nowPlayingMovies = useLoaderData();
    useFetchPopularMovie();
    useFetchTopRatedMovies();
    useFetchUpcomingMovies();
    const { showGptSearch } = useHeaderLogic();
    return (
        <div className='relative'>
            <Header />
            {showGptSearch ? <GptSearch />
                : <>
                    <MainContainer />
                    <SecondaryContainer />
                </>}
        </div>
    );
};

export default Browse;
