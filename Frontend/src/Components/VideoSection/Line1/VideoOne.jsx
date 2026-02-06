import React, { useRef, useState } from "react";
import VideoOneV from "../../../assets/Main.mp4";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { Link } from "react-router-dom";

function VideoOne() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="mt-10 px-4 md:px-10 flex flex-col md:flex-row items-center gap-8">
      {/* Video Section */}
      <div className="w-full md:w-[50%] h-64 md:h-[420px] lg:h-[600px] relative">
        <video
          ref={videoRef}
          src={VideoOneV}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover shadow-2xl"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={togglePlay}
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-black hover:bg-gray-300"
          >
            {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
          </button>
          <button
            onClick={toggleMute}
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-black hover:bg-gray-300"
          >
            {isMuted ? <FaVolumeMute size={12} /> : <FaVolumeUp size={12} />}
          </button>
        </div>
      </div>

      {/* Notes Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-gray-900">
          The LEVEL Identity Series
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-sans mb-4">
          A curated exploration of individuality captured for LEVEL, where style
          becomes a canvas for authentic self-expression, blending fashion with
          personal stories.
        </p>
        <div className="text-center mt-6">
           <Link to="/Serone" >
          <button className="py-2 px-4 transition duration-300 relative group">
            Keep Discovering
            <span className="block w-0 group-hover:w-full h-[1px] bg-black mx-auto mt-2 transition-all duration-500"></span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VideoOne;
