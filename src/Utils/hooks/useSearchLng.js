
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../Redux/store";
import SUPPORTED_LANG from "../langConstant";

const useSearchLng = () => {
    const dispatch = useDispatch();
    const selectedLang = useSelector((state) => state.config.lang);
    const langDetails = SUPPORTED_LANG.find((lang) => lang.lang === selectedLang) || SUPPORTED_LANG[0];
    console.log(langDetails);

    const handleLanguageChange = (event) => {
        dispatch(changeLang(event.target.value));
        console.log(event.target.value);
    };

    return { handleLanguageChange, langDetails };
};

export default useSearchLng;