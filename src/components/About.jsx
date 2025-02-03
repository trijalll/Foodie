import React from "react";
import img1 from "./../images/about.png";

function About() {
  return (
    <div className="mt-20 flex flex-col md:flex-row items-center text-center px-4 mx-[5vw] pb-[6vw]">
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
        <h1 className="text-3xl font-semibold">
          Welcome to foodie.
        </h1>
        <br />
        <p className="text-sm md:text-base mt-4 text-gray-700">
          Welcome to Foodie., your go-to destination for delicious and high-quality food! We are passionate about serving fresh, flavorful, and carefully crafted dishes that satisfy your cravings. Our mission is to bring you the best dining experience, whether you're looking for a quick bite or a full-course meal. With a diverse menu featuring a variety of cuisines, we ensure that every dish is prepared with top-quality ingredients and the utmost care. We believe in delivering not just food, but happiness to your doorstep. Our seamless online ordering process ensures a hassle-free experience, making it easy for you to enjoy great food anytime, anywhere. Thank you for choosing us—where every meal is made with love and served with excellence!
        </p>
        <p className="mt-4 px-4 py-2 text-white bg-slate-600 text-sm rounded-full shadow-md">
          Tasty & Fresh Food
        </p>
        <br />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-right">
        <a
          href="/menu"
          className="w-full flex justify-center transform transition hover:scale-105"
        >
          <img
            className="max-w-[90%] md:max-w-[70%] rounded-md shadow-md"
            src={img1}
            alt="Tasty & Fresh Food"
          />
        </a>
      </div>
    </div>
  );
}

export default About;
