import React from "react";
import { useSelector } from "react-redux";

function TotalCart() {
  const items = useSelector((store) => store.cart.items);

  const totalAmount = items.reduce((total, item) => {
    const price = item.card.info.price ?? item.card.info.defaultPrice;
    return total + price / 100;
  }, 0);

  return (
    <div className="flex justify-center w-full mt-8 mb-8">
      <div className="w-full max-w-5xl p-4 bg-gray-700 text-white rounded-full text-[1.3vw] hover:bg-slate-600">
        <button className="w-full text-center">
          Total: ₹ {totalAmount.toFixed(2)}
        </button>
      </div>
    </div>
  );
}

export default TotalCart;
