import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-600 text-white py-10">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center gap-4 mb-4">
          {/* Social Media Icons (remix.com) */}
          <a href="#" className="text-white hover:text-gray-400">
            <i className="ri-facebook-fill text-xl"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="ri-instagram-fill text-xl"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="ri-twitter-fill text-xl"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="ri-linkedin-fill text-xl"></i>
          </a>
        </div>

        <p className="text-lg font-semibold">
          Foodie. <span className="text-red-400">❤️</span> by Trijal Singh
        </p>
        <p className="text-sm opacity-80 mt-2">All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
