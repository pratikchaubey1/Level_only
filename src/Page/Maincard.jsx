import React, { useState, useContext, useEffect, useRef } from 'react';
import { FiX, FiPhoneCall, FiMapPin, FiPlusCircle } from 'react-icons/fi';
import Navbar from '../Components/Navbar/Navbar';
import { ProductContext } from '../Context/Productcontext/ProductContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { modalEntranceAnimation, productCardAnimation, imageFadeInAnimation } from '../utils/animeAnimations';

function Maincard({ product, onClose, isOpen, onProductSelect }) {
  const [selectedSize, setSelectedSize] = useState('');
  const { alldata, addToCart } = useContext(ProductContext);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalEntranceAnimation(modalRef.current);
      setTimeout(() => {
        imageFadeInAnimation();
        productCardAnimation();
      }, 200);
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  // Get related products from the same category (excluding current product)
  const relatedProducts = alldata
    .filter(item => item.category === product.category && item.id !== product.id)
    .slice(0, 8); // Limit to 8 related products

  const handleAddToCart = () => {
    if (!selectedSize) {
      return;
    }
    
    // Add product to cart with selected size
    const productWithSize = {
      ...product,
      selectedSize,
      name: product.Name,
      image: product.Img,
      price: product.Price,
      category: product.category
    };
    
    addToCart(productWithSize);
    onClose();
  };

  const handleRelatedProductClick = (relatedProduct) => {
    if (onProductSelect) {
      setSelectedSize(''); // Reset size selection for new product
      // Scroll to top of the modal container smoothly
      const modalContainer = document.querySelector('.maincard-modal-container');
      if (modalContainer) {
        modalContainer.scrollTo({ top: 0, behavior: 'smooth' });
      }
      onProductSelect(relatedProduct);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto z-50">
      <div ref={modalRef} className="fixed inset-0 bg-white overflow-y-auto z-50 maincard-modal-container">
    
        {/* Cancel Button */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 md:top-6 md:right-6 mt-5 z-60 p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800"
        >
          <FiX className="text-xl" />
        </button>

        {/* Add padding-top to avoid overlap */}
        <div className="pt-10 md:pt-28">
          {/* Main Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 md:p-12 mt-4 md:mt-6">
            {/* Left: Product Image */}
            <div className="w-full h-90 md:h-[60vh] bg-gray-100 flex justify-center items-center">
              <img
                src={product.Img}
                alt={product.Name}
                className="w-full h-full md:w-150 md:h-140 object-cover animate-image-fade"
              />
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col justify-start">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Online Exclusive
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
                {product.Name}
              </h2>
              <p className="text-xl md:text-2xl text-gray-800 font-bold mt-2">
                ${product.Price}
              </p>

              {/* Variation Example */}
              <div className="mt-4 md:mt-6">
                <p className="text-gray-700 text-lg font-medium">Variation</p>
                <div className="flex gap-2 md:gap-3 mt-2 overflow-x-auto">
                  <img
                    src={product.Img}
                    alt="variation"
                    className="w-16 h-16 md:w-14 md:h-14 border p-1 cursor-pointer hover:border-black flex-shrink-0"
                  />
                  <img
                    src={product.Img}
                    alt="variation"
                    className="w-16 h-16 md:w-14 md:h-14 border p-1 cursor-pointer hover:border-black flex-shrink-0"
                  />
                </div>
              </div>

              {/* Size Selector */}
              <div className="mt-4 md:mt-6">
                <p className="text-gray-700 text-lg font-medium">Size</p>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full mt-2 px-4 md:px-6 py-2 md:py-3 border rounded-lg text-lg font-medium hover:bg-gray-100 cursor-pointer"
                >
                  <option value="">Select Size</option>
                  <option value="SM">SM</option>
                  <option value="M">M</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>

              {/* Add to Cart Button */}
              <div className="mt-6 md:mt-8">
                <button
                  onClick={handleAddToCart}
                  className="w-full px-6 py-3 bg-black text-white text-lg rounded-lg hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>

              {/* Extra Links with Icons */}
              <div className="mt-4 md:mt-6 space-y-3 text-gray-700">
                <p className="flex items-center gap-2 md:gap-3 cursor-pointer hover:underline">
                  <FiPhoneCall className="text-lg" /> Order by Phone
                </p>
                <p className="flex items-center gap-2 md:gap-3 cursor-pointer hover:underline">
                  <FiMapPin className="text-lg" /> Check Availability in Store
                </p>
                <p className="flex items-center gap-2 md:gap-3 cursor-pointer hover:underline">
                  <FiPlusCircle className="text-lg" /> Level Services
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="p-4 md:p-12 border-t">
            <h3 className="text-lg md:text-xl font-bold uppercase">
              Product Description
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed text-sm md:text-base">
              {product.Description ||
                "Introducing this exclusive design which reinterprets athletic codes for a modern lifestyle."}
            </p>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="p-4 md:p-12 border-t bg-gray-50">
              <h3 className="text-lg md:text-xl font-bold uppercase mb-6">
                Related Products
              </h3>
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={2}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                }}
                className="related-products-swiper"
              >
                {relatedProducts.map((relatedProduct) => (
                  <SwiperSlide key={relatedProduct.id}>
                    <div
                      onClick={() => handleRelatedProductClick(relatedProduct)}
                      className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group animate-product-card"
                    >
                      <div className="aspect-square overflow-hidden ">
                        <img
                          src={relatedProduct.Img}
                          alt={relatedProduct.Name}
                          className="w-full h-full object-cover transition-transform duration-300 animate-image-fade"
                        />
                      </div>
                      <div className="p-3">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {relatedProduct.Name}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          ${relatedProduct.Price}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Maincard