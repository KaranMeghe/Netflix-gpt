import { useSelector, useDispatch } from "react-redux";
import { toggleMute } from "../../Redux/store";

export const useMuteUnmute = () => {
    const mute = useSelector((state) => state.movies.trailerMute);
    const dispatch = useDispatch();

    // Use toggleMute to switch between mute/unmute
    const handleMute = () => {
        dispatch(toggleMute());  // Toggling the mute state
    };

    return { handleMute, mute };
};
