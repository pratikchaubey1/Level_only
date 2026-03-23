import React, { useContext } from 'react'
import Logo from './Logo.jsx'
import { motion } from "framer-motion"
import { useLocation } from 'react-router-dom';
import { ProductContext } from '../../Context/Productcontext/ProductContext.jsx';
import CartIcon from './CartIcon.jsx';
import ProfileMenu from './ProfileMenu.jsx';
import SearchButton from './SearchButton.jsx';
import MenuDrawer from './MenuDrawer.jsx';



function Navbar() {
  const { isscroll } = useContext(ProductContext);
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-colors duration-500 font-poppins ${
        isscroll ? "bg-white shadow-md  text-gray-900" : "bg-transparent text-gray-900"
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 h-full flex justify-between items-center'>
        <Logo/>
        {/* Icons */}
        <div className={`flex items-center gap-5 sm:gap-8 transition-colors duration-500 ${!isscroll && isLanding ? 'text-gray-100' : ''}`}>
          <CartIcon/>
          <ProfileMenu/>
          <SearchButton />
          <MenuDrawer />
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar