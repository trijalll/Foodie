import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpandList from "./Expand_list";
import { clearCart } from "./cartSlice";
import TotalCart from "./TotalCart";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-auto mt-16 sm:mt-[7.5em] px-4">
      <h1 className="font-bold text-3xl sm:text-4xl text-gray-800 mb-6">
        Your Cart
      </h1>
      
      {/* Clear Cart Button */}
      <button
        className="bg-slate-700 text-white text-[1vw] px-5 py-2 rounded-full m-4 hover:bg-gray-800 transition ease-in-out duration-200 transform hover:scale-105"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      
      {/* Cart Empty Message */}
      {cartItems.length === 0 ? (
        <h2 className="text-lg sm:text-xl text-gray-600">
          Your cart is empty. Start shopping now!
        </h2>
      ) : (
        <div className="max-w-screen-md w-full bg-gray-50 shadow-lg rounded-lg overflow-hidden mx-auto my-6 p-4">
          <ExpandList items={cartItems} page="Cart" />
        </div>
      )}

      {/* Total Price Section */}
      <div className="">
        <TotalCart />
      </div>
    </div>
  );
}

export default Cart;
