import { VideoBackground, VideoTitle } from "../index";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const movies = useSelector((state) => state.movies.nowPlayingMovies);
    if (!movies) return;
    const mainMovie = movies[0];


    const { original_title, overview, id } = mainMovie;
    return (
        <div className="relative">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
};

export default MainContainer;