/* eslint-disable react/prop-types */

import { useFetchVideo } from "../../Utils/hooks/useFetchVideo";
import { useSelector } from "react-redux";


const VideoBackground = ({ movieId }) => {
    // Only call useFetchVideo when the movieId changes
    useFetchVideo(movieId);

    const trailerKey = useSelector((state) => state.movies.trailerId);
    // const { handleMute, mute } = useMuteUnmute();
    // src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1${mute ? '&mute=1' : ''}`}


    return (
        <div className="w-screen">
            {trailerKey && (
                <iframe
                    id="youtubePlayer"
                    className="w-screen aspect-video"
                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};

export default VideoBackground;
