
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { categories } from "./categories";
import { categoryTitleAnim, categoryCardAnim } from "./animations";
import { Link } from "react-router-dom";
import { categoryCardsAnimation, cardHoverAnimation, cardHoverOutAnimation } from "../../utils/animeAnimations";

const CategoriesSection = () => {
  const categoryRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      categoryCardsAnimation();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full">
      {/* Title */}
      <motion.div
        className="mt-10"
        {...categoryTitleAnim}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-medium mb-6 text-black text-center">
         EXPLORE THE LATEST STYLES
        </h1>
      </motion.div>

      {/* Category Grid */}
      <div className="px-4 sm:px-10 mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
        {categories.map((item, index) => (
          <Link to={item.path} key={item.id}>
            <motion.div
              ref={el => categoryRefs.current[index] = el}
              {...categoryCardAnim(index)}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
              onMouseEnter={(e) => cardHoverAnimation(e.currentTarget)}
              onMouseLeave={(e) => cardHoverOutAnimation(e.currentTarget)}
              className="bg-white/90 hover:bg-white overflow-hidden cursor-pointer animate-category-card"
            >
              {/* Image */}
              <img
                src={item.Img}
                alt={item.Name}
                className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover animate-image-fade"
              />

              {/* Title */}
              <h1 className="text-xl font-semibold text-black text-center py-3">
                {item.Name}
              </h1>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;