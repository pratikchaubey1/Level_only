import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import One from "../../assets/One.png"; // apni image ka path
import { containerVariants, titleVariants, buttonVariants } from "./Fashionanimation"; // ✅ import animation
import { imageFadeInAnimation, buttonPulseAnimation } from "../../utils/animeAnimations";

function Fashion() {
  useEffect(() => {
    const timer = setTimeout(() => {
      imageFadeInAnimation();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center mt-15 px-4">
      <motion.div
        className="relative w-full sm:max-w-md md:max-w-3xl lg:max-w-5xl h-48 sm:h-56 md:h-64 lg:h-72 transform transition duration-700 hover:shadow-2xl"
        variants={containerVariants} //  connect container animation
        initial="hidden"
        animate="visible"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover rounded-lg shadow-lg animate-image-fade"
          style={{ backgroundImage: `url(${One})` }}
        ></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-4">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-black"
            variants={titleVariants} // ✅ connect title animation
            initial="hidden"
            animate="visible"
          >
             Fashion 2025
          </motion.h1>

          <Link to="/All">
            <motion.button
              className="py-2 px-6 sm:py-3 sm:px-8 bg-white/20 rounded-md text-black font-medium transition duration-300 hover:backdrop-blur-sm hover:bg-white/30 animate-page-load"
              variants={buttonVariants} //  connect button animation
              whileHover="hover"
              whileTap="tap"
              onMouseEnter={(e) => buttonPulseAnimation(e.currentTarget)}
            >
              SHOP THE NEW COLLECTION
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Fashion;
