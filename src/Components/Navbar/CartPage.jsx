import React, { useContext } from "react";
import {
  IoArrowBack,
  IoRemoveOutline,
  IoAddOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { FaRegCircle, FaDotCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../Context/Productcontext/ProductContext";
import { Link } from "react-router-dom";

function AuthCheckoutButton() {
  const { isAuthenticated } = useContext(ProductContext);
  const navigate = useNavigate();
  if (!isAuthenticated) {
    return (
      <Link to="/Login" className="w-full block">
        <button className="w-full bg-teal-600 text-white py-3 rounded mt-6 font-semibold tracking-wide hover:bg-teal-700 transition">
          SIGN IN TO CHECKOUT
        </button>
      </Link>
    );
  }
  return (
    <button className="w-full bg-black text-white py-3 rounded mt-6 font-semibold tracking-wide hover:bg-gray-900 transition" onClick={() => navigate('/Dev')}>
      PROCEED TO CHECKOUT
    </button>
  );
}

function CartPage() {
  const navigate = useNavigate();
  const { cart, setcart, removeFromCart } = useContext(ProductContext);

  const increaseQty = (id) => {
    setcart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setcart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + (item.price || item.Price) * item.quantity,
    0
  );

  return (
    <div className="bg-white/90">
      {/* Back button */}
      <div className="flex items-center mt-5 px-3 sm:px-8">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 text-black transition hover:bg-gray-100 rounded flex items-center gap-2 text-base"
        >
          <IoArrowBack className="text-lg" /> Back
        </button>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-light mt-5 ml-6 sm:ml-16 mb-4">Your Cart</h1>

      {/* Cart Layout */}
      <div className="flex flex-col lg:flex-row gap-5 px-2 sm:px-4 lg:px-24 py-8">
        {/* Cart Items */}
        <div className="flex-1 bg-white shadow-lg shadow-gray-400 rounded-lg p-3 sm:p-6 min-w-[280px]">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 py-10">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center border-b py-4 gap-3 last:border-b-0">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-gray-400 hover:text-black"
                >
                  <IoCloseOutline size={22} />
                </button>
                <img
                  src={item.image || item.Img}
                  alt={item.name || item.Name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded bg-gray-100 object-cover mr-3 sm:mr-5"
                />
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="font-medium truncate">{item.name || item.Name}</div>
                  <div className="text-xs text-gray-400 truncate">
                    {item.category} / x{item.quantity}
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <FaDotCircle className="mr-1" />
                    <span className="text-base font-medium">
                      ₹{item.price || item.Price}.00
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 ml-2">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="p-2 border rounded-full text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      <IoRemoveOutline />
                    </button>
                    <span className="w-6 text-center block">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="p-2 border rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <IoAddOutline />
                    </button>
                  </div>
                  <div className="text-black font-bold text-lg whitespace-nowrap">
                    ₹{(item.price || item.Price) * item.quantity}.00
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Coupon code */}
          {cart.length > 0 && (
            <div className="flex items-center gap-3 pt-8">
              <input
                type="text"
                placeholder="Coupon code"
                className="border px-3 py-2 text-sm rounded outline-none focus:border-gray-400 w-30"
              />
              <button className="px-4 py-2 border text-xs rounded hover:bg-black hover:text-white transition">
                APPLY
              </button>
            </div>
          )}
        </div>

        {/* Cart Totals */}
        {cart.length > 0 && (
          <div className="w-full max-w-sm bg-white shadow-lg shadow-gray-400 rounded-lg p-4 sm:p-6 mt-8 lg:mt-0 lg:ml-6">
            <h2 className="text-xl mb-4">Cart Totals</h2>
            <div className="flex justify-between text-sm py-1">
              <span>Shipping (3-5 Business Days)</span>
              <span className="font-medium text-green-700">Free</span>
            </div>
            <div className="flex justify-between text-sm py-1">
              <span>TAX (India)</span>
              <span className="">₹0</span>
            </div>
            <div className="flex justify-between text-base font-medium border-t pt-5 my-3">
              <span>Subtotal</span>
              <span>₹{subtotal}.00</span>
            </div>
            <div className="flex justify-between text-lg font-bold pb-2 border-b">
              <span>Total</span>
              <span>₹{subtotal}.00</span>
            </div>
            {/* If not logged in, show Sign in CTA */}
            {cart.length > 0 && (
              <>
                <AuthCheckoutButton />
              </>
            )}
            <button
              onClick={() => navigate("/")}
              className="w-full mt-3 py-2 text-black opacity-70 hover:underline"
            >
              &#60; CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
