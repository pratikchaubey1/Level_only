import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingBag } from 'react-icons/fi'

function CartIcon() {
  return (
    <div>
      <Link to="/cart">
        <button
          className="text-gray-700 transition-colors transition-transform duration-200 border-b-2 border-transparent hover:text-red-500 hover:border-red-500 hover:scale-110 text-3xl"
          aria-label="Open cart"
        >
          <FiShoppingBag className="text-2xl" />
        </button>
      </Link>
    </div>
  )
}

export default CartIcon
