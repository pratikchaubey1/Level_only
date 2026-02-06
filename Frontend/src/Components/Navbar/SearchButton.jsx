import React, { useContext, useState, useMemo } from "react";
import { IoIosSearch } from "react-icons/io";
import { ProductContext } from "../../Context/Productcontext/ProductContext";
import { useNavigate, useLocation } from "react-router-dom";

const SearchButton = () => {
  const { alldata } = useContext(ProductContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Filter products based on search term
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return alldata.filter(product =>
      product.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 10); // Limit to 10 results
  }, [alldata, searchTerm]);

  const handleProductClick = (product) => {
    setIsSearchOpen(false);
    setSearchTerm("");
    
    // Navigate to the appropriate category page
    const categoryRoutes = {
      'Sneakers': '/Sneaker',
      'Bags': '/Bag',
      'Jeans': '/Jeans',
      'Shirts': '/Shirt'
    };
    
    const route = categoryRoutes[product.category] || '/All';
    navigate(route);
    
    // Scroll to product after navigation
    setTimeout(() => {
      const productElement = document.querySelector(`[data-product-id="${product.id}"]`);
      if (productElement) {
        productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 500);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsSearchOpen(true)}
        className="hover:text-red-700 transition-all duration-300 mt-1 border-b-2 border-transparent hover:border-red-700"
      >
        <IoIosSearch className="text-2xl" />
      </button>

      {isSearchOpen && (
        <div className="fixed inset-0 bg-white/90 z-50 flex flex-col font-poppins overflow-y-auto">
          <div className="flex items-center w-full border-b px-4 sm:px-6 py-3 sm:py-4 sticky top-0 bg-white z-50">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border-b border-gray-400 px-2 sm:px-3 py-1.5 sm:py-2 text-base sm:text-lg focus:outline-none focus:border-blue-600 bg-transparent"
              autoFocus
            />
            <button
              onClick={() => {
                setIsSearchOpen(false);
                setSearchTerm("");
              }}
              className="ml-3 sm:ml-4 text-gray-700 font-medium hover:text-red-600 text-sm sm:text-base"
            >
              Cancel
            </button>
          </div>

          {!searchTerm.trim() ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-8 text-gray-800">
              <div>
                <h3 className="font-semibold mb-3 sm:mb-4">TRENDING SEARCHES</h3>
                <ul className="space-y-1 sm:space-y-2">
                  {['Nike', 'Bags', 'Jeans', 'Shirts'].map((term, index) => (
                    <li
                      key={index}
                      className="text-sm sm:text-base cursor-pointer hover:underline"
                      onClick={() => setSearchTerm(term)}
                    >
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 sm:mb-4">CATEGORIES</h3>
                <ul className="space-y-1 sm:space-y-2">
                  {['Sneakers', 'Bags', 'Jeans', 'Shirts'].map((category, index) => (
                    <li
                      key={index}
                      className="text-sm sm:text-base cursor-pointer hover:underline"
                      onClick={() => setSearchTerm(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 sm:mb-4">POPULAR</h3>
                <ul className="space-y-1 sm:space-y-2">
                  {['Air Force', 'Louis Vuitton', 'Dior', 'Supreme'].map((item, index) => (
                    <li
                      key={index}
                      className="text-sm sm:text-base cursor-pointer hover:underline"
                      onClick={() => setSearchTerm(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="p-4 sm:p-8">
              {filteredProducts.length > 0 ? (
                <div className="space-y-3">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleProductClick(product)}
                      className="flex items-center p-3 hover:bg-white hover:shadow-sm cursor-pointer rounded-lg transition-all duration-200 bg-white/50"
                    >
                      {/* Product Image */}
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                        <img
                          src={product.Img}
                          alt={product.Name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                      
                      {/* Product Info */}
                      <div className="ml-4 flex-1">
                        <h3 className="font-medium text-gray-900 text-base sm:text-lg">{product.Name}</h3>
                        <p className="text-sm text-gray-600">{product.category}</p>
                        <p className="text-sm sm:text-base font-semibold text-gray-800 mt-1">${product.Price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-10">
                  <p className="text-base sm:text-lg">No results found for "{searchTerm}"</p>
                  <p className="text-sm mt-2">Try different keywords or browse our categories above</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchButton;