import React, { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
import { toast } from "react-toastify";
import { fetchProducts } from "../../api/products";

function ProductProvider({ children }) {
  const [isscroll, setisscroll] = useState(false);
  const [cart, setcart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token'))
  );
  const [alldata, setalldata] = useState([]);

  useEffect(() => {
    const handleScroll = () => setisscroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load products from backend once on mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();

        // Normalize product shape defensively so the frontend doesn't break
        // if the backend field names differ (e.g. Img vs ProductImage).
        const normalized = (products || []).map((p) => {
          const firstImageFromArray = Array.isArray(p?.ProductImage)
            ? p.ProductImage[0]
            : undefined;

          return {
            id: p.id || p._id,
            Name: p.Name || p.name || "",
            Description: p.Description || p.description || "",
            Price:
              p.Price !== undefined && p.Price !== null
                ? p.Price
                : p.price || 0,
            Img: p.Img || p.img || firstImageFromArray || "",
            category:
              p.category || p.Category?.Name || p.Category || "",
          };
        });

        setalldata(normalized);
      } catch (error) {
        console.error("Failed to load products", error);
        toast.error("Failed to load products");
      }
    };

    loadProducts();
  }, []);

  // Filter products by category
  const sneakersData = alldata.filter((item) => item.category === "Sneakers");
  const bagsData = alldata.filter((item) => item.category === "Bags");
  const jeansData = alldata.filter((item) => item.category === "Jeans");
  const shirtsData = alldata.filter((item) => item.category === "Shirts");

  const addToCart = (product) => {
    // Allow adding without login; checkout will prompt sign-in
    setcart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      const label = product.Name || product.name || 'Item';
      if (existing) {
        toast.dismiss('cart-add');
        toast.success(`${label} added to cart`, { toastId: 'cart-add' });
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.dismiss('cart-add');
        toast.success(`${label} added to cart`, { toastId: 'cart-add' });
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const loginUser = (token, remember) => {
    if (remember) localStorage.setItem('auth_token', token);
    else sessionStorage.setItem('auth_token', token);
    setIsAuthenticated(true);
  };

  const logoutUser = () => {
    localStorage.removeItem('auth_token');
    sessionStorage.removeItem('auth_token');
    setIsAuthenticated(false);
    setcart([]);
  };

  const removeFromCart = (id) => {
    setcart((prevCart) => {
      const item = prevCart.find((i) => i.id === id);
      if (item) {
        toast.dismiss('cart-remove');
        toast.info(`${item.Name || item.name || 'Item'} removed from cart`, { toastId: 'cart-remove' });
      }
      return prevCart.filter((i) => i.id !== id);
    });
  };

  return (
    <ProductContext.Provider
      value={{
        isscroll,
        alldata,
        setalldata,
        sneakersData,
        bagsData,
        jeansData,
        shirtsData,
        cart,
        setcart,
        addToCart,
        removeFromCart,
        isAuthenticated,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
