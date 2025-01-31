
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import { MainContainer, SecondaryContainer } from '../index';

const Browse = () => {
    // eslint-disable-next-line no-unused-vars
    const nowPlayingMovies = useLoaderData();

    return (
        <div className='relative h-screen'>
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
