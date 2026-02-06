// CategoriesSection.jsx
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "./categories";

// import variants
import { containerVariants, titleVariant, cardVariant } from "./animations";
// import hover utils
import { cardHoverAnimation, cardHoverOutAnimation } from "./hoverHandlers";

const CategoriesSection = () => {
  const categoryRefs = useRef([]);

  return (
    <div className="relative w-full">
      {/* Title */}
      <motion.div
        className="mt-10"
        variants={titleVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h1 className="text-3xl font-medium mb-6 text-black text-center">
          EXPLORE THE LATEST STYLES
        </h1>
      </motion.div>

      {/* Grid container with stagger */}
      <motion.div
        className="px-4 sm:px-10 mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {categories.map((item, index) => (
          <Link to={item.path} key={item.id} className="group">
            <motion.div
              ref={(el) => (categoryRefs.current[index] = el)}
              variants={cardVariant}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.04, transition: { duration: 0.18 } }}
              whileTap={{ scale: 0.96 }}
              onMouseEnter={(e) => cardHoverAnimation(e.currentTarget)}
              onMouseLeave={(e) => cardHoverOutAnimation(e.currentTarget)}
              className="bg-white overflow-hidden cursor-pointer   relative"
            >
              {/* Image */}
              <motion.img
                src={item.Img}
                alt={item.Name}
                initial={{ scale: 1.02 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
              />

              {/* Title */}
              <h1 className="text-xl font-semibold text-black text-center py-3">
                {item.Name}
              </h1>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default CategoriesSection;
