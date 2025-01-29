import React from "react";
import img1 from "../images/star.png";

function ResCard({ name, img_id, rating, time, areaName }) {
  return (
    <div className="cardBody h-[50vh] w-[42vh] rounded-lg shadow-md bg-white overflow-hidden">
      {/* Background Image */}
      <div
        className="cardImage h-[75%] rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${img_id})`,
        }}
      ></div>

      {/* Card Content */}
      <div className="cardCont h-[25%] py-2 px-3 flex flex-col justify-between">
        <h1 className="font-semibold text-lg truncate">{name}</h1>
        <div className="cardContent flex justify-between items-center">
          <span className="flex gap-2 items-center text-gray-600">
            <i className="text-green-700 ri-star-s-fill"></i>
            {rating}
          </span>
          <p className="text-sm text-gray-500">
            {areaName} • {time} mins
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResCard;
