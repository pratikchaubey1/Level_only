import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import SerOneVid from "../../assets/serOne.mp4";

import NikeairL from "../../assets/NikeL.png";
import NikeairT from "../../assets/NikeT.png";

function SerTwo() {
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

  const [data] = useState([
    { id: 1, name: "Nike Dunk Low.", Img: NikeairL },
    { id: 2, name: "Travis Scott x Nike.", Img: NikeairT },
  ]);

  return (
    <div className="bg-white/90">
      {/* Title Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20 space-y-4">
        <span className="text-sm font-semibold bg-gray-300/75 text-gray-800 px-3 py-1 rounded-md mt-20">
          LEVEL SERVICE
        </span>

        <h1 className="text-5xl md:text-6xl font-light tracking-widest text-gray-900">
          Sneaker Fashion
        </h1>

        <p className="text-sm md:text-base tracking-wider text-gray-700 font-medium">
          “Step into comfort and confidence — Sneaker Fashion that defines your
          street style.”
        </p>
      </div>

      {/* Full Width Video Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] mt-14">
        <video
          ref={videoRef}
          src={SerOneVid}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-3">
          <button
            onClick={togglePlay}
            className="w-10 h-10 bg-gray-200/70 backdrop-blur-sm rounded-full flex items-center justify-center text-black"
          >
            {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
          </button>
          <button
            onClick={toggleMute}
            className="w-10 h-10 bg-gray-200/70 backdrop-blur-sm rounded-full flex items-center justify-center text-black"
          >
            {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
          </button>
        </div>
      </div>

      {/* Center Buttons with Animated Border */}
      <div className="flex items-center justify-center gap-20 mt-10">
        <button className="relative text-md font-sans px-4 pb-1 group">
          Ready Made
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full"></span>
        </button>

        <Link to="/" className="relative group">
          <button className="text-md font-sans px-4 pb-1">Customized</button>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full"></span>
        </Link>
      </div>

      {/* Info Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20 space-y-4 px-6">
        <p className="font-sans text-md">
          Whether you wear it or gift it, elevate every step with Level Sneaker
          Fashion — where comfort meets individuality.
        </p>
        <h1 className="font-serif text-2xl mt-6">Ready Made</h1>
        <h2 className="font-sans text-md max-w-2xl">
          Experience exceptional craftsmanship in every lace and layer. Each
          sneaker is thoughtfully designed with premium materials to deliver
          unmatched comfort, precise fit, and timeless street style.
        </h2>
        <h2 className="font-sans text-md max-w-2xl">
          If a design is available for customization, a ‘Personalize Your Pair’
          option will appear directly on its product page, allowing you to make
          your sneakers truly your own.
        </h2>
      </div>

      {/* Image Grid Section */}
      <div className="px-4 sm:px-10 mt-10 flex flex-wrap justify-center items-center gap-6">
        {data.map((item) => (
          <Link to="/" key={item.id}>
            <div className="bg-white/90 overflow-hidden cursor-pointer transition-transform duration-300 flex flex-col items-center ">
              <img
                src={item.Img}
                alt={item.name}
                className="w-full h-[500px] object-cover rounded-t-xl"
              />
              <h1 className="relative text-xl font-sans text-black text-center py-4 pb-1 group">
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full"></span>
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SerTwo;
