import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingBag } from 'react-icons/fi'

function CartIcon() {
  return (
    <Link
      to="/cart"
      className="text-current transition-all duration-200 border-b-2 border-transparent hover:text-red-500 hover:border-red-500 hover:scale-110 flex items-center justify-center py-1"
      aria-label="Open cart"
    >
      <FiShoppingBag className="text-2xl" />
    </Link>
  )
}

export default CartIcon
