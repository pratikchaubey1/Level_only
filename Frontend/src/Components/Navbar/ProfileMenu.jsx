import React, { useState, useEffect, useRef, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/Productcontext/ProductContext";

function ProfileMenu() {
  const [profileOpen, setProfileOpen] = useState(false);
  const menuRef = useRef(null);
  const { isAuthenticated, logoutUser } = useContext(ProductContext);

  const menuItems = isAuthenticated
    ? [
        { to: null, text: "LOG OUT", onClick: () => logoutUser() },
      ]
    : [
        { to: "/Login", text: "SIGN IN" },
        { to: "/Signup", text: "SIGN UP" },
      ];

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Profile Button */}
      <button
        onClick={() => setProfileOpen((prev) => !prev)}
        className="text-current transition-all duration-200 border-b-2 border-transparent hover:text-red-500 hover:border-red-500 hover:scale-110 flex items-center justify-center py-1"
        aria-label="Profile"
      >
        <FiUser className="text-3xl" />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {profileOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="absolute right-0 top-12  bg-white shadow-lg rounded-md w-56 h-auto z-50 font-poppins"
          >
            {menuItems.map((item, i) => (
              item.to ? (
                <Link
                  key={i}
                  to={item.to}
                  className="block px-4 py-2 mt-5 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  onClick={() => setProfileOpen(false)}
                >
                  {item.text}
                </Link>
              ) : (
                <button
                  key={i}
                  className="w-full text-left block px-4 py-2 mt-1 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    item.onClick?.();
                    setProfileOpen(false);
                  }}
                >
                  {item.text}
                </button>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProfileMenu;
