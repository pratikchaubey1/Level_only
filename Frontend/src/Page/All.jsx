import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../Context/Productcontext/ProductContext';
import { TbArrowsShuffle } from 'react-icons/tb';
import { IoArrowBack } from 'react-icons/io5';
import Maincard from './Maincard';
import { productCardAnimation, pageLoadAnimation, buttonPulseAnimation, imageFadeInAnimation } from '../utils/animeAnimations';

function All() {
  const navigate = useNavigate();
  const { alldata } = useContext(ProductContext);
  const [shuffledData, setShuffledData] = useState([]);
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
    if (alldata && alldata.length > 0) {
      setShuffledData(shuffleArray(alldata));
    }
  }, [alldata]);

  useEffect(() => {
    pageLoadAnimation();
    setTimeout(() => {
      productCardAnimation();
      imageFadeInAnimation();
    }, 300);
  }, [shuffledData]);

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
    if (alldata && alldata.length > 0) {
      setShuffledData(shuffleArray(alldata));
    }
  };

  return (
    <div>
      {/* Title */}
      <h1 className="bg-gray-100 px-4 py-2 mt-20 text-xl font-mono flex items-center gap-2 animate-page-load">
        All Products{" "}
        <span className="text-sm text-gray-600">
          ({shuffledData?.length || 0} items)
        </span>
      </h1>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-5 px-4">
        <button
          onClick={handleShuffle}
          onMouseEnter={(e) => buttonPulseAnimation(e.currentTarget)}
          className="px-4 py-2 hover:bg-gray-100 rounded transition flex items-center gap-2 animate-page-load"
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

      {/* Content (BAG STYLE UI) */}
      <div className="bg-white mt-10 px-4 sm:px-10">
        {!shuffledData || shuffledData.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">Loading products...</p>
          </div>
        ) : (
          <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">

            {/* First 8 */}
            {shuffledData.slice(0, 8).map((item) => (
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
            <div className="hidden md:block break-inside-auto mb-4">
              <img
                src="https://i.pinimg.com/1200x/8d/5a/0d/8d5a0d68d7b9eae47f3f1d0b5a7e0d5b.jpg"
                alt="Special"
                className="w-full h-auto object-cover animate-image-fade"
              />
            </div>

            {/* Remaining */}
            {shuffledData.slice(8).map((item) => (
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
        onProductSelect={handleProductSelect}
      />
    </div>
  );
}

export default All;