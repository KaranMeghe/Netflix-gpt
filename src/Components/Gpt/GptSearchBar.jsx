import { Button, Input } from '../../Ui/index';
import useSearchLng from '../../Utils/hooks/useSearchLng';
import { LanguageSelector } from '../index';


const GptSearchBar = () => {
    const { handleLanguageChange, langDetails } = useSearchLng();

    return (
        <div className='flex gap-4 mt-40  bg-black opacity-80 p-5'>
            <Input type="text" placeholder={langDetails.gptSearchPlaceHolder} className="border border-gray-300 placeholder:text-gray-200 placeholder:font-semibold font-semibold w-96 p-2 rounded-sm text-gray-200" />
            <Button className="border border-red-500 bg-red-500 text-white font-semibold px-4 rounded-sm">{langDetails.search}</Button>
            <LanguageSelector handleLanguageChange={handleLanguageChange} selectedLang={langDetails.lang} />
        </div>
    );
};

export default GptSearchBar;