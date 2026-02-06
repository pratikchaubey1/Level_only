import React, { useContext } from 'react'
import Logo from './Logo.jsx'
import { motion } from "framer-motion"
import { ProductContext } from '../../Context/Productcontext/ProductContext.jsx';
import CartIcon from './CartIcon.jsx';
import ProfileMenu from './ProfileMenu.jsx';
import SearchButton from './SearchButton.jsx';
import MenuDrawer from './MenuDrawer.jsx';



function Navbar() {
  const {isscroll}= useContext(ProductContext)
  return (
   <div className="font-poppins bg-white justify-between text-gray-900 overflow-x-hidden border-b-2">
      <motion.div
        className={`fixed top-0 left-0 w-full h-20 z-50 transition-colors duration-500 ${
          isscroll ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className='max-w-7xl mx-auto relative px-4 sm:px-6 py-2 sm:py-3 flex justify-center items-center'>
          <Logo/>
          {/* Icons */}
          <div className='absolute right-4 sm:right-6 top-2 sm:top-6 z-10 flex gap-3 sm:gap-6 text-gray-700'>
            <CartIcon/>
            <ProfileMenu/>
            <SearchButton />
            <MenuDrawer />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar