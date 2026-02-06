import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

import ServiceOne from "../../../assets/ServiceOne.mp4";
import ServiceTwo from "../../../assets/ServiceTwo.mp4";
import ServiceThree from "../../../assets/ServiceThree.mp4";

function VideoTwo() {
  const services = [
    {
      id: 1,
      name: "Clothing Quality",
      videoSrc: ServiceOne,
      link: "/serOne",
      description:
        "At LEVEL, clothing quality means more than fabric—it’s the promise of comfort, durability, and timeless style.",
    },
    {
      id: 2,
      name: "Sneaker Fashion",
      videoSrc: ServiceTwo,
      link: "/serTwo",
      description:
        "Sneaker fashion at LEVEL represents individuality and confidence. Comfortable yet bold, our sneakers stand out.",
    },
    {
      id: 3,
      name: "Cool Outfits",
      videoSrc: ServiceThree,
      link: "/serThree",
      description:
        "Cool outfits are all about effortless style and versatility. Looks curated for every occasion.",
    },
  ];

  // Maintain state per video
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [mutedStates, setMutedStates] = useState(services.map(() => true));

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlayingIndex(index);
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  };

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    video.muted = !video.muted;
    setMutedStates((prev) =>
      prev.map((m, i) => (i === index ? video.muted : m))
    );
  };

  return (
    <div className="px-4 md:px-10">
      {/* Section Heading */}
      <motion.div
        className="mb-10 mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-medium mb-4 text-black text-center">
          LEVEL SERVICES
        </h1>
      </motion.div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex flex-col items-center overflow-hidden bg-White/90"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-64 md:h-80 lg:h-96 bg-white/90">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.videoSrc}
                autoPlay
                loop
                muted={mutedStates[index]}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => togglePlay(index)}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-black hover:bg-gray-300"
                >
                  {playingIndex === index ? (
                    <FaPause size={12} />
                  ) : (
                    <FaPlay size={12} />
                  )}
                </button>
                <button
                  onClick={() => toggleMute(index)}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-black hover:bg-gray-300"
                >
                  {mutedStates[index] ? (
                    <FaVolumeMute size={12} />
                  ) : (
                    <FaVolumeUp size={12} />
                  )}
                </button>
              </div>
            </div>

            <Link
              to={item.link}
              className="mt-5 text-2xl text-black font-mono hover:underline transition duration-300"
            >
              {item.name}
            </Link>
            <p className="text-black mt-2 text-sm font-medium text-center px-2">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default VideoTwo;
