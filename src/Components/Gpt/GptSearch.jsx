import { POSTER_IMG, POSTER_IMG_SRCSET } from "../../Utils/constatnt";
import { GptSearchBar, GptSuggestions } from '../index';

const GptSearch = () => {
    return (
        <div className='flex flex-col items-center h-screen z-80  bg-gradient-to-r from-black'>
            <img src={POSTER_IMG} srcSet={POSTER_IMG_SRCSET} aria-hidden="true"
                className="h-screen w-full object-cover" alt="bg-movie-poster" />
            <div className='absolute'>
                <GptSearchBar />
                <GptSuggestions />
            </div>
        </div>
    );
};

export default GptSearch;