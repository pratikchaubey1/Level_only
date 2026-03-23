import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  backgroundAnim,
  heroContainerAnim,
  heroTitleAnim,
  heroButtonAnim,
} from "./animations";
import { heroTextAnimation } from "../../utils/animeAnimations";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      heroTextAnimation();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#ceccc7] w-full min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      
      {/* Desktop Background */}
      <motion.div
        className="hidden sm:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6167276/pexels-photo-6167276.jpeg')",
        }}
        {...backgroundAnim}
      />

      {/* Mobile Background */}
      <motion.div
        className="block sm:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/5f/96/d9/5f96d97602b3cb03a0ab160675e13299.jpg')",
        }}
        {...backgroundAnim}
      />

      {/* Hero Content */}
      <motion.div
        className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-6 px-4"
        {...heroContainerAnim}
      >
        <motion.h1
          className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-gray-100 text-center animate-hero-text"
          {...heroTitleAnim}
          whileHover={{ scale: 1.05 }}
        >
          Fashion 2026
        </motion.h1>

        <motion.div
          className="flex gap-4 sm:gap-6 font-medium text-sm sm:text-md animate-hero-text"
          {...heroButtonAnim}
        >
          <Link to="/All">
            <motion.button
              className="py-2 px-5 sm:py-3 sm:px-7 bg-transparent border border-gray-100 rounded-md text-white transition duration-300 ease-in-out hover:bg-black hover:text-white"
              whileHover={{ scale: 1.05 }}
            >
              Shop Now
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;