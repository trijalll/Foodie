import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img1 from "../images/delivery-bike.png";

function Header() {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="header h-[10vh] flex bg-slate-700 text-white items-center px-[5vw]">
        <div className="headerLogo w-1/2">
          <Link to="/">
            <p className="font-semibold text-xl">foodie.</p>
          </Link>
        </div>
        <div className="headerItems w-1/2 flex justify-end gap-7">
          <Link to="/about">
            <p>About us</p>
          </Link>
          <Link to="/contact">
            <p>Contact us</p>
          </Link>
          {/* <i class="ri-login-circle-line"></i> */}
          <Link to="/cart">
            <i class="ri-shopping-cart-line"></i>{" "}
            {cartItems.length !== 0 && `(${cartItems.length} items)`}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
