import React, { useRef, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaPlus,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SerOneVid from "../../assets/Kone.mp4";
import NikeOne from "../../assets/NikeOne.png";
import NikeTwo from "../../assets/NikeTwo.png";
import Cone from "../../assets/COne.png";
import Ctwo from "../../assets/CTwo.png";
import Cthree from "../../assets/CThree.png";
import Instore from "./Instore";

function Serone() {
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
    { id: 1, name: "Discover the art of travel.", Img: NikeOne },
    { id: 2, name: "For journeys that define you.", Img: NikeTwo },
  ]);

  const [categories] = useState([
    { id: 1, name: "Sneaker", Img: Cone, path: "/Sneaker" },
    { id: 2, name: "Jeans", Img: Ctwo, path: "/Jeans" },
    { id: 3, name: "Shirts", Img: Cthree, path: "/Shirt" },
  ]);

  const categoryCardAnim = (index) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: index * 0.1, duration: 0.4 },
  });

  return (
    <div className="bg-white/90">
      {/* Title Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20 space-y-4">
        <span className="text-sm font-semibold bg-gray-300/75 text-gray-800 px-3 py-1 rounded-md mt-20">
          LEVEL SERVICE
        </span>

        <h1 className="text-5xl md:text-6xl font-light tracking-widest text-gray-900">
          COLLECT IN STORE
        </h1>

        <p className="text-sm md:text-base tracking-wider text-gray-700 font-medium">
          ORDER ONLINE AND COLLECT AT YOUR PREFERRED BOUTIQUE
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
          Online
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full"></span>
        </button>
        <Link to="/Instore" className="relative group">
          <button className="text-md font-sans px-4 pb-1">Store</button>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full"></span>
        </Link>
      </div>

      {/* Info Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20 space-y-4 px-6">
        <p className="font-sans text-md">
          Whether you intend to keep or gift it, enhance a Level item by adding
          a special detail.
        </p>
        <h1 className="font-serif text-2xl mt-6">Online</h1>
        <h2 className="font-sans text-md max-w-2xl">
          Experience exceptional craftsmanship across every stitch. Each piece
          of clothing is meticulously tailored using premium fabrics to ensure
          enduring comfort, precision fit, and timeless elegance.
        </h2>
        <h2 className="font-sans text-md max-w-2xl">
          If an item is available for personalization, a ‘Personalize with
          Initials’ option will appear directly on its product page.
        </h2>
      </div>

      {/* Image Grid Section */}
      <div className="px-4 sm:px-10 mt-10 flex flex-wrap justify-center items-center gap-6">
        {data.map((item) => (
          <Link to="/" key={item.id}>
            <div className="bg-white/90 hover:bg-white overflow-hidden cursor-pointer transition-transform duration-300 flex flex-col items-center">
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

      {/* Category Grid Section */}
      <div className="px-4 sm:px-10 mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
        {categories.map((item, index) => (
          <Link to={item.path} key={item.id}>
            <motion.div
              {...categoryCardAnim(index)}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              className="bg-white/90 hover:bg-white overflow-hidden cursor-pointer rounded-xl"
            >
              <img
                src={item.Img}
                alt={item.name}
                className="w-full h-64 sm:h-72 md:h-80 object-cover"
              />
              <h1 className="relative text-xl font-semibold text-black text-center py-3 group">
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full"></span>
              </h1>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Instore Component */}
      <Instore />

      <div className="flex flex-col items-center justify-center text-center mt-10 space-y-6 px-6 max-w-4xl mx-auto">
        {/* Main Help Title with animated underline */}
        <h1 className="relative text-3xl font-semibold group">
          May we help you?
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full"></span>
        </h1>

        {/* Subheading */}
        <p className="text-3xl font-semibold">
          A Client Advisor is available to explore
        </p>
        <p className="text-xl font-semibold">
          the world of personalization with you.
        </p>

        {/* Section Divider / Keep Exploring */}
        <h1 className="text-3xl font-light mt-20">KEEP EXPLORING</h1>

        {/* Appointment Call-to-Action */}
        <p className="text-xl font-sans mt-4">
          Book an appointment with your chosen store to explore engraving and
          embossing with a Client Advisor. Throughout your dedicated
          consultation, you will discover the history behind this artisanal
          service and be guided through choosing personalization options for an
          existing piece or finding something new.
        </p>

        {/* Styled Button */}
        <button className="relative mt-6 text-2xl font-semibold  overflow-hidden group">
          Find Store
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full"></span>
        </button>
      </div>
    </div>
  );
}

export default Serone;
