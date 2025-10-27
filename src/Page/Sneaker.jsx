import React, { useContext, useState, useEffect } from "react";
import SneakerImg from "../assets/Sneakers.png";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../Context/Productcontext/ProductContext";
import { TbArrowsShuffle } from "react-icons/tb";
import { IoArrowBack } from "react-icons/io5";
import Maincard from './Maincard';
import { productCardAnimation, pageLoadAnimation, buttonPulseAnimation, imageFadeInAnimation } from '../utils/animeAnimations';

function Sneaker() {
  const navigate = useNavigate();
  const { sneakersData } = useContext(ProductContext);
  const [shuffledSneakers, setShuffledSneakers] = useState([]);
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

  // Shuffle data when sneakersData changes
  useEffect(() => {
    if (sneakersData && sneakersData.length > 0) {
      setShuffledSneakers(shuffleArray(sneakersData));
    }
  }, [sneakersData]);

  useEffect(() => {
    pageLoadAnimation();
    setTimeout(() => {
      productCardAnimation();
      imageFadeInAnimation();
    }, 300);
  }, [shuffledSneakers]);

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
    if (sneakersData && sneakersData.length > 0) {
      setShuffledSneakers(shuffleArray(sneakersData));
    }
  };

  return (
    <div>
      {/* Title */}
      <h1 className="bg-gray-100 px-4 py-2 mt-20 text-xl font-mono flex items-center gap-2 animate-page-load">
        Sneakers{" "}
        <span className="text-sm text-gray-600">
          ({shuffledSneakers?.length || 0} items)
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
          style={{ backgroundImage: `url(${SneakerImg})` }}
        ></div>
      </div>
      {/* Products Grid */}
      <div className="bg-white mt-10 px-4 sm:px-10">
        {!shuffledSneakers || shuffledSneakers.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">Loading sneakers...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* First 8 cards */}
            {shuffledSneakers.slice(0, 8).map((item) => (
              <div
                key={item.id}
                data-product-id={item.id}
                onClick={() => handleProductClick(item)}
                className="bg-white overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out w-full cursor-pointer shadow-sm hover:shadow-md animate-product-card"
              >
                <div className="relative h-64 sm:h-72 md:h-80 w-full">
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
                  src="https://i.pinimg.com/1200x/9a/ee/aa/9aeeaa8d3891381d6cc1542b6589c47d.jpg"
                  alt="Special"
                  className="w-full h-full object-cover animate-image-fade"
                />
              </div>

              {/* Right Side → 2 Cards */}
              <div className="md:flex-1 flex flex-col gap-4 sm:gap-6 mt-4 md:mt-0">
                {shuffledSneakers.slice(8, 10).map((item) => (
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
            {shuffledSneakers.slice(10, 18).map((item) => (
              <div
                key={item.id}
                data-product-id={item.id}
                onClick={() => handleProductClick(item)}
                className="bg-white overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out w-full cursor-pointer shadow-sm hover:shadow-md animate-product-card"
              >
                <div className="relative h-64 sm:h-72 md:h-80 w-full">
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

export default Sneaker;
