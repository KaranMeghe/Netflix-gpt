import { GptSearchBar, GptSuggestions } from '../index';

const GptSearch = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen z-80'>
            <GptSearchBar />
            <GptSuggestions />
        </div>
    );
};

export default GptSearch;