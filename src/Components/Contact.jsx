import React from "react";
import star from "../assets/images/hepta-dark.png";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#f8f9fa] py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl leading-[1.2] font-bold text-[#4A060D] text-center mb-10">
          Let’s Get In Touch
        </h1>

        <div className="relative bg-white rounded-xl shadow-md px-6 py-10 md:px-10 md:py-12">
          <form className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-base text-gray-700 font-medium mb-2">
                Your Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#4A060D] focus:outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-base text-gray-700 font-medium mb-2">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#4A060D] focus:outline-none transition"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-base text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#4A060D] focus:outline-none transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-base text-gray-700 font-medium mb-2">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#4A060D] transition"
                  required
                ></textarea>
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="w-full bg-[#4A060D] text-white font-semibold py-3 rounded-lg hover:bg-[#3b050a] transition duration-300 cursor-pointer"
              >
                Send Message
              </button>
          </form>

          {/* Decorative Element */}
          <img
            src={star}
            alt="decorative icon"
            className="absolute -top-10 -right-10 w-20 h-20 opacity-30 animate-slow-spin"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
