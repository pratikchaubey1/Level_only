import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import { ProductContext } from "../../Context/Productcontext/ProductContext";
import { UseLogoTransforms } from "../../Context/Productcontext/UseLogoTransforms";

const Logo = () => {
  const { isscroll } = useContext(ProductContext);
  const { logoSize, logoY, logoX, isDesktop } = UseLogoTransforms();
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
     <Link to="/" className="font-playfair tracking-widest w-full">
      <div
        className={`flex items-center mt-2 ${
          isDesktop ? "justify-center" : "justify-start px-4"
        }`}
      >
       <motion.h1
  className={`font-serif text-3xl md:text-5xl lg:text-6xl transition-colors duration-500 ${
    isscroll ? "text-gray-900" : isLanding ? "text-gray-100" : "text-gray-900"
  }`}
>
  {isDesktop ? "L E V E L" : "LEVEL"}
</motion.h1>
      </div>
    </Link>
  );
};

export default Logo;