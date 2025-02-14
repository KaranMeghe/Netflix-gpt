/* eslint-disable react/prop-types */
import { Button } from "../../Ui";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

const VideoTitle = ({ title, overview }) => {
    return (
        <>
            <div className="absolute px-6 w-screen aspect-video text-white bg-gradient-to-t from-black">
                <div className="absolute px-2 top-65  md:bottom-10 xl:bottom-40 2xl:top-120">
                    <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
                    <p className="py-6 text-sm md:text-lg md:w-1/2 font-semibold w-full" >{overview}</p>

                    <div className="flex ">
                        <div className="my-4 flex gap-4">
                            <Button className="border py-2 px-10 bg-white text-black text-sm md:text-xl flex items-center gap-2 rounded hover:bg-gray-300"> <FaPlay /> Play</Button>
                            <Button className="border py-2 px-10 bg-gray-600 text-white opacity-80 text-sm md:text-xl flex items-center gap-2 rounded hover:bg-transparent"> <FiInfo /> More Info</Button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default VideoTitle;