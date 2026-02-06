import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Sneaker", path: "/Sneaker" },
    { label: "Shirt", path: "/Shirt" },
    { label: "Bag", path: "/Bag" },
    { label: "Jean", path: "/Jeans" },
  ];

  return (
    <>
      {/* Open Drawer Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-700 transition-colors transition-transform duration-200 border-b-2 border-transparent hover:text-red-500 hover:border-red-500 hover:scale-110 text-3xl"
        aria-label="Open menu"
      >
        <MdMenu />
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-5 right-5">
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-3 bg-black text-white hover:bg-gray-800 transition-colors shadow-lg"
          >
            <IoCloseSharp size={24} />
          </button>
        </div>

        {/* Menu Content */}
        <div className="mt-16 p-6 space-y-8">
          <div className="mb-8">
            <h2 className="text-2xl font-serif tracking-wide">Menu</h2>
          </div>

          <nav className="flex flex-col space-y-6 font-sans text-lg text-gray-900">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="relative group px-2 py-1 overflow-hidden"
              >
                <span className="block group-hover:text-gray-900 transition-colors duration-300">
                  {item.label}
                </span>
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Footer link */}
          <div className="mt-8 border-t border-gray-200 pt-4 text-sm text-gray-600">
            <Link
              to="/About"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-900 transition-colors duration-300"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay with blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default MenuDrawer;
