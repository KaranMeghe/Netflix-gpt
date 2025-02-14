import { useDispatch, useSelector } from "react-redux";
import { addSearchResults, changeLang, setIsLoading } from "../../Redux/store"; // Correct import path
import SUPPORTED_LANG from "../langConstant";
import { model } from "../../Utils/gemniApi";
import { fetchSearchMovies } from "../services";


const useSearchLng = (searchText) => {
    const dispatch = useDispatch();
    const selectedLang = useSelector((state) => state.config.lang);
    const langDetails = SUPPORTED_LANG.find((lang) => lang.lang === selectedLang) || SUPPORTED_LANG[0];

    const handleLanguageChange = (event) => {
        dispatch(changeLang(event.target.value));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(setIsLoading(true));
        const prompt = `Act as a movie recommendation engine. The user's request is: "${searchText.current.value}". Give me recommendations with names. Return data in an array of objects with the following fields: name, release_date, rating, and genre. Only return valid JSON.`;

        try {
            const response = await model.generateContent(prompt);
            let responseText = await response.response.text();

            // Clean response text
            responseText = responseText.replace(/```[a-z]*\n/gi, "").replace(/```/g, "").trim();

            let movieData;
            try {
                movieData = JSON.parse(responseText);
            } catch (jsonError) {
                console.error("Initial JSON Parse Error:", jsonError);

                const jsonMatch = responseText.match(/\[.*\]/s);
                if (jsonMatch) {
                    try {
                        movieData = JSON.parse(jsonMatch[0]);
                    } catch (retryError) {
                        console.error("JSON Extraction Parse Error:", retryError);
                        return;
                    }
                } else {
                    console.error("No valid JSON found in response.");
                    return;
                }
            }


            // Fetch movie details from TMDb API
            const searchResults = await Promise.all(
                movieData.map(async (movie) => {
                    const tmdbMovie = await fetchSearchMovies(movie.name);
                    return tmdbMovie?.[0] || null; // Ensure valid movie objects
                })
            );

            // Filter out any null results before dispatching
            const validResults = searchResults.filter(Boolean);
            dispatch(addSearchResults(validResults));
            dispatch(setIsLoading(false));


        } catch (error) {
            console.error("Error in handleSubmit:", error);
        }
    };


    return { handleLanguageChange, handleSubmit, langDetails };
};

export default useSearchLng;