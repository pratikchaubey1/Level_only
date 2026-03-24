import React, { useEffect } from "react";
import { footerAnimation } from "../../utils/animeAnimations";

function Footer() {
  useEffect(() => {
    const timer = setTimeout(() => {
      footerAnimation();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="bg-black text-gray-200 px-4 py-20 mt-10 animate-footer">
      {/* Top Main Section */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left Info */}
        <div className="text-xs leading-relaxed">
          <p>Wide Range of Products</p>
          <p>Latest Trends & Offers</p>
          <p>Secure Shopping</p>
        </div>

        {/* Center Name */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-7xl  sm:text-8xl md:text-8xl font-serif text-white tracking-tight leading-none mb-4">
            L E V E L
          </h1>
        </div>

        {/* Right Info */}
        <div className="text-xs text-right leading-relaxed">
          <p> More than years of experience</p>
          <a
            href="#"
            className="underline text-gray-400 hover:text-white block my-1"
          >
            Utter Pradesh
          </a>
          <p>
            India
            <br />
            2025
          </p>

          {/* Social Media Buttons */}
          <div className="flex justify-end gap-6 mt-2 text-[1rem]">
            <a
              href="https://github.com/pratikchaubey1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:underline transition-all"
              title="Github"
            >
              Github
            </a>

            <a
              href="https://www.instagram.com/_prabonly/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:underline transition-all"
              title="Instagram"
            >
              Instagram
            </a>

            <a
              href="https://x.com/Prab01036553944"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:underline transition-all"
              title="X"
            >
              X
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-4xl mx-auto mt-5 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-3 text-[11px] text-gray-400 font-mono">
        <div className="flex gap-8 mb-2 md:mb-0">
          <a href="#" className="hover:underline">
            Contact
          </a>
          <span>Pratikup89@gmail.com.</span>
        </div>

        <div className="flex gap-4 text-center">
          <span>
            &copy; 2025 Template by{" "}
            <a href="#" className="underline">
              Prab
            </a>{" "}
            | All Rights Reserved.
          </span>
          <a href="#" className="ml-3 hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;