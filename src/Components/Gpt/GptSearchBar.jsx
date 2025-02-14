import { useRef } from 'react';
import { Button, Input } from '../../Ui/index';
import useSearchLng from '../../Utils/hooks/useSearchLng';
import { LanguageSelector } from '../index';


const GptSearchBar = () => {
    const searchText = useRef(null);
    const { handleLanguageChange, handleSubmit, langDetails } = useSearchLng(searchText);

    return (
        <div className='flex justify-center flex-col md:flex-row gap-4 mt-40 bg-black opacity-80 p-5  '>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:flex-row w-80 md:w-full max-w-xl overflow-x-hidden">
                <Input ref={searchText} type="text" placeholder={langDetails.gptSearchPlaceHolder} className="border border-gray-300 placeholder:text-gray-400 md:w-96 p-2 rounded-sm text-gray-200 text-sm md:text-lg" />
                <Button className="border border-red-500 bg-red-500 text-white font-semibold px-4 rounded-sm 
                   transition active:scale-95 focus:ring-2 focus:ring-red-300">
                    {langDetails.search}
                </Button>

            </form>
            <LanguageSelector handleLanguageChange={handleLanguageChange} selectedLang={langDetails.lang} />
        </div>
    );
};

export default GptSearchBar;