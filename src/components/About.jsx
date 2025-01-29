import React from "react";
import img1 from "./../images/about.png";

function About() {
  return (
    <div className="mt-[7.5em] flex flex-col items-center text-center px-6">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-screen-xl mx-auto w-full py-14 gap-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-2xl md:text-3xl lg:text-5xl font-bold">
          <h1 className="px-4">Welcome to</h1>
          <h1 className="px-4 py-2">The world of</h1>
          <h1 className="px-6 py-4 md:py-6 lg:py-8 text-white bg-orange-500 rounded-2xl shadow-lg">
            Tasty & Fresh Food
          </h1>
        </div>

        {/* Image Section with Link */}
        <a href="/menu" className="w-3/4 md:w-1/2 h-full transform transition duration-300 hover:scale-105">
          <img className="p-4 md:p-12 w-full rounded-lg shadow-lg" src={img1} alt="Tasty & Fresh Food" />
        </a>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white w-full py-4 text-center">
        <div className="text-lg font-medium">
          <span>Created by ♥ Trijal Singh</span>
        </div>
      </footer>
    </div>
  );
}

export default About;
