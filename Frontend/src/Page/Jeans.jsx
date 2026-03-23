import React, { useContext, useEffect, useState } from "react";
import JeansImg from "../assets/Jens.png";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../Context/Productcontext/ProductContext";
import { TbArrowsShuffle } from "react-icons/tb";
import { IoArrowBack } from "react-icons/io5";
import Maincard from './Maincard';
import { productCardAnimation, pageLoadAnimation, buttonPulseAnimation, imageFadeInAnimation } from '../utils/animeAnimations';

function Jeans() {
  const navigate = useNavigate();
  const { jeansData } = useContext(ProductContext);
  const [shuffledJeans, setShuffledJeans] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Shuffle data when jeansData changes
  useEffect(() => {
    if (jeansData && jeansData.length > 0) {
      setShuffledJeans(shuffleArray(jeansData));
    }
  }, [jeansData]);

  useEffect(() => {
    pageLoadAnimation();
    setTimeout(() => {
      productCardAnimation();
      imageFadeInAnimation();
    }, 300);
  }, [shuffledJeans]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleShuffle = () => {
    if (jeansData && jeansData.length > 0) {
      setShuffledJeans(shuffleArray(jeansData));
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-8">
      {/* Title */}
      <h1 className="bg-gray-100 px-4 py-2 mt-20 text-xl font-mono flex items-center gap-2 animate-page-load">
        Jeans{" "}
        <span className="text-sm text-gray-600">
          ({shuffledJeans?.length || 0} items)
        </span>
      </h1>

      {/* Navigation and Control Buttons */}
      <div className="flex justify-between items-center mt-5 px-4">
        <button
          onClick={handleShuffle}
          onMouseEnter={(e) => buttonPulseAnimation(e.currentTarget)}
          className="hover:bg-gray-100 rounded px-2 py-2 transition flex items-center gap-2 animate-page-load"
        >
          <TbArrowsShuffle className="text-lg" />
        </button>
        <button
          onClick={() => navigate("/")}
          onMouseEnter={(e) => buttonPulseAnimation(e.currentTarget)}
          className="px-4 py-2 text-black transition hover:bg-gray-100 rounded flex items-center gap-2 animate-page-load"
        >
          <IoArrowBack className="text-lg" />
          Back 
        </button>
      </div>

      {/* Top Image Banner */}
      <div className="w-full mt-3 relative flex items-center justify-center overflow-hidden">
        <div
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${JeansImg})` }}
        ></div>
      </div>
      <div className="bg-white mt-10 px-4 sm:px-10">
        {!shuffledJeans || shuffledJeans.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">Loading jeans...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* First 8 cards */}
            {shuffledJeans.slice(0, 8).map((item) => (
              <div
                key={item.id}
                data-product-id={item.id}
                onClick={() => handleProductClick(item)}
                className="bg-white rounded-md md:rounded-none overflow-hidden hover:scale-105 active:scale-95 md:active:scale-100 transform transition duration-300 ease-in-out w-full cursor-pointer shadow-sm hover:shadow-md animate-product-card"
              >
                <div className="relative h-48 sm:h-64 md:h-80 w-full">
                  <img
                    src={item.Img}
                    alt={item.Name}
                    className="w-full h-full object-cover animate-image-fade"
                  />
                  <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-0.5 uppercase">
                    New
                  </span>
                </div>
                <div className="p-3 text-left">
                  <h1 className="text-gray-900 text-sm font-medium">
                    {item.Name}
                  </h1>
                  <h2 className="text-gray-700 text-sm font-semibold mt-1">
                    $ {item.Price}
                  </h2>
                </div>
              </div>
            ))}

            {/* Middle Section → 1 Big Image + 2 Cards */}
            <div className="hidden md:flex col-span-2 md:col-span-4 flex-col md:flex-row gap-6 items-stretch mt-10">
              {/* Left Side Big Image */}
              <div className="md:flex-[2] flex-1 h-64 sm:h-80 md:h-[950px]">
                <img
                  src="https://i.pinimg.com/736x/bb/9c/32/bb9c323a89fee4978bcf52901d172557.jpg"
                  alt="Special"
                  className="w-full h-full object-cover animate-image-fade"
                />
              </div>

              {/* Right Side → 2 Cards */}
              <div className="md:flex-1 flex flex-col gap-4 sm:gap-6 mt-4 md:mt-0">
                {shuffledJeans.slice(8, 10).map((item) => (
                  <div
                    key={item.id}
                    data-product-id={item.id}
                    onClick={() => handleProductClick(item)}
                    className="bg-white overflow-hidden mt-8 hover:scale-105 transform transition duration-300 ease-in-out w-full animate-product-card"
                  >
                    <div className="relative h-64 sm:h-72 md:h-100 w-full">
                      <img
                        src={item.Img}
                        alt={item.Name}
                        className="w-full h-full object-cover animate-image-fade"
                      />
                      <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-0.5 uppercase">
                        New
                      </span>
                    </div>
                    <div className="p-3 text-left">
                      <h1 className="text-gray-900 text-sm font-medium">
                        {item.Name}
                      </h1>
                      <h2 className="text-gray-700 text-sm font-semibold mt-1">
                        $ {item.Price}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next 8 cards */}
            {shuffledJeans.slice(10, 18).map((item) => (
              <div
                key={item.id}
                data-product-id={item.id}
                onClick={() => handleProductClick(item)}
                className="bg-white rounded-md md:rounded-none overflow-hidden hover:scale-105 active:scale-95 md:active:scale-100 transform transition duration-300 ease-in-out w-full cursor-pointer shadow-sm hover:shadow-md animate-product-card"
              >
                <div className="relative h-48 sm:h-64 md:h-80 w-full">
                  <img
                    src={item.Img}
                    alt={item.Name}
                    className="w-full h-full object-cover animate-image-fade"
                  />
                  <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-0.5 uppercase">
                    New
                  </span>
                </div>
                <div className="p-3 text-left">
                  <h1 className="text-gray-900 text-sm font-medium">
                    {item.Name}
                  </h1>
                  <h2 className="text-gray-700 text-sm font-semibold mt-1">
                    $ {item.Price}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Maincard Modal */}
      <Maincard 
        product={selectedProduct}
        onClose={handleCloseModal}
        isOpen={isModalOpen}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
}

export default Jeans;
