/* eslint-disable react/prop-types */
import SUPPORTED_LANG from "../../Utils/langConstant";

const LanguageSelector = ({ handleLanguageChange, selectedLang }) => {
    return (
        <select
            onChange={handleLanguageChange}
            value={selectedLang}
            className='border border-gray-300 rounded-sm text-gray-400'
        >
            {SUPPORTED_LANG.map((lang) => (
                <option key={lang.code} value={lang.lang} className='text-center font-semibold'>
                    {lang.lang}
                </option>
            ))}
        </select>
    );
};


export default LanguageSelector;