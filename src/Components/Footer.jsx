import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#4A060D] text-white pt-24 pb-12" id="footer">
      <div className="container mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-start">

          {/* Logo & About */}
          <div>
            <img src={logo} alt="Logo" className="mb-6 w-[100px]" />
            <p className="text-sm text-gray-400 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-1">Email</h4>
              <a href="mailto:hello@example.com" className="text-gray-300 hover:text-white transition">hello@example.com</a>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-1">Phone</h4>
              <p className="text-gray-300">+12 345 678 90</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-1">Address</h4>
              <p className="text-gray-300">
                Borough 47, Aveton Gifford,<br />
                Devon, UK, EX4 1QU
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-left md:text-right">
            <h4 className="text-lg font-semibold mb-3">Have a project in mind?</h4>
            <a
              href="#contact"
              className="inline-block bg-white text-[#1A1A1A] font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">

            {/* Social Icons */}
            <div className="flex space-x-5 mb-4 md:mb-0">
              <a href="#" className="hover:text-white" aria-label="Facebook">
                <i className="icon-facebook text-xl"></i>
              </a>
              <a href="#" className="hover:text-white" aria-label="Twitter">
                <i className="icon-twitter text-xl"></i>
              </a>
              <a href="#" className="hover:text-white" aria-label="Instagram">
                <i className="icon-instagram text-xl"></i>
              </a>
            </div>

            {/* Copyright */}
            <p>© {new Date().getFullYear()} All rights reserved. Theme by Tansh.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
