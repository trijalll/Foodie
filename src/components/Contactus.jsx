import React from "react";

function ContactUs() {
  return (
    <div className="flex h-[80vh] w-full p-10 my-10">
      <div
        className="contactLeft flex justify-center items-center h-full w-1/2"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/restaurant-booking-banners_1284-21314.jpg?t=st=1738139273~exp=1738142873~hmac=69c573d0e7938e74c5c62013ecc91e13dc5f836c65dcf5634bb075fc43a837ec&w=740')",
          backgroundSize: "contain", // Ensures the image is large and covers the container
          backgroundPosition: "center", // Keeps the image centered
          backgroundRepeat: "no-repeat", // Prevents image repetition
        }}
      ></div>
      <div className="contactRight flex flex-col justify-evenly h-100 w-1/2 md:h-3/5 md:w-1/2 md:pe-8 md:p-4 pr-10">
        <h1 className="text-3xl md:text-5xl font-semibold text-center mb-6">
          Contact Us
        </h1>
        <div>
          <input
            type="text"
            className="border-2 border-gray-300 px-3 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
            placeholder="Your Name"
          />
        </div>
        <div>
          <input
            type="email"
            className="border-2 border-gray-300 px-3 py-2 w-full rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-slate-700"
            placeholder="Your Email"
          />
        </div>
        <div>
          <textarea
            className="border-2 border-gray-300 px-3 py-2 w-full rounded-lg mt-4 focus:outline-none focus:ring-2 focus:bg-slate-100"
            placeholder="Your Message"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-slate-700 p-3 rounded-lg w-full text-white hover:bg-slate-600">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
