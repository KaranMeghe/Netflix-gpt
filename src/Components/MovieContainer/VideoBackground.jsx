/* eslint-disable react/prop-types */

import { useFetchVideo } from "../../Utils/hooks/useFetchVideo";
import { useSelector } from "react-redux";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { Button } from "../../Ui";
import { useMuteUnmute } from "../../Utils/hooks/useMuteUnmute";

const VideoBackground = ({ movieId }) => {
    // Only call useFetchVideo when the movieId changes
    useFetchVideo(movieId);

    const trailerKey = useSelector((state) => state.movies.trailerId);
    const { handleMute, mute } = useMuteUnmute();

    return (
        <div className="w-screen">
            {trailerKey && (
                <iframe
                    id="youtubePlayer"
                    className="w-screen aspect-video"
                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1${mute ? '&mute=1' : ''}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            )}

            <div className="absolute bottom-12 right-15">
                <Button
                    onClick={handleMute}
                    className="text-white text-2xl border p-2 rounded-full"
                >
                    {mute ? <VscMute /> : <VscUnmute />}
                </Button>
            </div>
        </div>
    );
};

export default VideoBackground;
