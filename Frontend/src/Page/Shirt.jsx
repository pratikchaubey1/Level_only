import React, { useContext, useState, useEffect } from "react";
import ShirtsImage from "../assets/Shirts.png";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../Context/Productcontext/ProductContext";
import { TbArrowsShuffle } from "react-icons/tb";
import { IoArrowBack } from "react-icons/io5";
import Maincard from "./Maincard";
import { productCardAnimation, pageLoadAnimation, buttonPulseAnimation, imageFadeInAnimation } from "../utils/animeAnimations";

function Shirt() {
  const navigate = useNavigate();
  const { shirtsData } = useContext(ProductContext);
  const [shuffledShirts, setShuffledShirts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const shuffleArray = (array) => {
    const shuffled = [...(array || [])];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    if (shirtsData && shirtsData.length > 0) {
      setShuffledShirts(shuffleArray(shirtsData));
    }
  }, [shirtsData]);

  useEffect(() => {
    pageLoadAnimation();
    setTimeout(() => {
      productCardAnimation();
      imageFadeInAnimation();
    }, 300);
  }, [shuffledShirts]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleShuffle = () => {
    if (shirtsData && shirtsData.length > 0) {
      setShuffledShirts(shuffleArray(shirtsData));
    }
  };

  return (
    <div>
      {/* Title */}
      <h1 className="bg-gray-100 px-4 py-2 mt-20 text-xl font-mono flex items-center gap-2 animate-page-load">
        Shirts{" "}
        <span className="text-sm text-gray-600">
          ({shuffledShirts?.length || 0} items)
        </span>
      </h1>

      {/* Buttons */}
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

      {/* Banner */}
      <div className="w-full mt-3 relative flex items-center justify-center overflow-hidden">
        <div
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ShirtsImage})` }}
        ></div>
      </div>

      {/* Content (BAG STYLE UI) */}
      <div className="bg-white mt-10 px-4 sm:px-10">
        {!shuffledShirts || shuffledShirts.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">Loading shirts...</p>
          </div>
        ) : (
          <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">

            {/* First 8 */}
            {shuffledShirts.slice(0, 8).map((item) => (
              <div
                key={item.id}
                onClick={() => handleProductClick(item)}
                className="break-inside-avoid mb-4 bg-white overflow-hidden hover:scale-[1.02] transition cursor-pointer animate-product-card"
              >
                <div className="relative w-full">
                  <img
                    src={item.Img}
                    alt={item.Name}
                    className="w-full h-auto object-cover animate-image-fade"
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

            {/* Middle Image */}
            <div className="hidden md:block break-inside-avoid mb-4">
              <img
                src="https://i.pinimg.com/1200x/0f/61/5f/0f615f4c21e6b64d7dba7f1c92dbf2d3.jpg"
                alt="Special"
                className="w-full h-auto object-cover animate-image-fade"
              />
            </div>

            {/* Remaining */}
            {shuffledShirts.slice(8).map((item) => (
              <div
                key={item.id}
                onClick={() => handleProductClick(item)}
                className="break-inside-avoid mb-4 bg-white overflow-hidden hover:scale-[1.02] transition cursor-pointer animate-product-card"
              >
                <div className="relative w-full">
                  <img
                    src={item.Img}
                    alt={item.Name}
                    className="w-full h-auto object-cover animate-image-fade"
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

      {/* Modal */}
      <Maincard
        product={selectedProduct}
        onClose={handleCloseModal}
        isOpen={isModalOpen}
      />
    </div>
  );
}

export default Shirt;