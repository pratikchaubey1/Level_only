import React from 'react';
import Inone from '../../assets/Inone.png';
import { Link } from 'react-router-dom';

function Instore() {
  return (
    <div className="bg-white/90 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center mt-20 space-y-6 px-4">
        <h1 className="font-serif text-3xl md:text-4xl">Store</h1>
        <p className="font-sans text-gray-700 max-w-xl">
          Our physical store is currently under process. We're working hard to bring you
          an enhanced in-store experience. Stay tuned for updates and new arrivals!
        </p>
        <Link to="/" className="relative group">
          <img
            src={Inone}
            alt="In-store preview"
            className="w-full max-w-[400px] h-auto mt-4 transition-transform duration-300 hover:scale-105"
          />
          {/* Animated border */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full"></span>
        </Link>
      </div>
    </div>
  );
}

export default Instore;
