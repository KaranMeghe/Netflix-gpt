/* eslint-disable react/prop-types */
import { Button } from "../../Ui";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

const VideoTitle = ({ title, overview }) => {
    return (
        <>
            <div className="absolute px-6 w-screen aspect-video text-white bg-gradient-to-t from-black">
                <div className="absolute md:bottom-10 xl:bottom-40 2xl:bottom-70">
                    <h1 className="text-6xl font-bold">{title}</h1>
                    <p className="py-6 text-lg w-1/2 font-semibold" >{overview}</p>

                    <div className="flex ">
                        <div className="my-4 flex gap-4">
                            <Button className="border py-2 px-10 bg-white text-black text-xl flex items-center gap-2 rounded hover:bg-gray-300"> <FaPlay /> Play</Button>
                            <Button className="border py-2 px-10 bg-gray-600 text-white opacity-80 text-xl flex items-center gap-2 rounded hover:bg-transparent"> <FiInfo /> More Info</Button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default VideoTitle;