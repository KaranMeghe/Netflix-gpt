
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const Browse = () => {
    const nowPlayingMovies = useLoaderData();
    console.log("Now Playing Movies:", nowPlayingMovies);
    return (
        <div className='relative h-screen'>
            <Header />
        </div>
    );
};

export default Browse;
