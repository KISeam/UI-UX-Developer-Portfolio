import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Header - lg and above */}
      <header
        id="dtr-header-global"
        className={`hidden md:hidden lg:block fixed top-0 left-0 right-0 z-[999] py-6 px-12 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-white"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="dtr-header-left">
            <Link to="/" className="logo-default">
              <img src={logo} alt="logo" width="88" height="25" />
            </Link>
          </div>

          <nav className="dtr-main-nav">
            <ul className="flex space-x-8 text-sm font-medium">
              <li>
                <Link
                  to="/"
                  className="text-[#4A060D] hover:text-[#c86358] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#works"
                  className="text-[#4A060D] hover:text-[#c86358] transition-colors"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[#4A060D] hover:text-[#c86358] transition-colors"
                >
                  About Me
                </a>
              </li>
              {/* <li>
                <a
                  href="#testimonial"
                  className="text-[#4A060D] hover:text-[#c86358] transition-colors"
                >
                  Testimonials
                </a>
              </li> */}
              <li>
                <a
                  href="#pricing"
                  className="text-[#4A060D] hover:text-[#c86358] transition-colors"
                >
                  Plans & Pricing
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-[#4A060D] hover:text-[#c86358] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#4A060D] hover:text-[#c86358] transition-colors"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hamburger for md only */}
      <header
        id="dtr-header-md"
        className={`block lg:hidden fixed top-0 left-0 right-0 z-[999] py-6 px-12 bg-white transition-all duration-300`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="dtr-header-left">
            <Link to="/" className="logo-default">
              <img src={logo} alt="logo" width="88" height="25" />
            </Link>
          </div>

          {/* হ্যামবারগার বাটন */}
          <button
            id="dtr-menu-button"
            className="w-8 h-6 flex flex-col justify-between relative focus:outline-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-0.5 w-full bg-[#4A060D] rounded transform transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-[#4A060D] rounded ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-[#4A060D] rounded transform transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Side Menu */}
        <div
          className={`dtr-sidemenu-wrapper fixed top-16 right-0 w-full max-w-[300px] p-12 bg-white z-[1111] h-full overflow-y-auto transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <a
            href="#"
            className="absolute top-4 right-4 text-xl font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </a>
          <ul className="dtr-nav dtr-main-nav dtr-vertical-nav space-y-4 text-lg">
            <li className="menu-item">
              <Link
                to="/"
                className="text-[#4A060D] hover:text-[#c86358] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="menu-item">
              <a
                href="#works"
                className="text-[#4A060D] hover:text-[#c86358] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Works
              </a>
            </li>
            <li className="menu-item">
              <a
                href="#about"
                className="text-[#4A060D] hover:text-[#c86358] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </a>
            </li>
            {/* <li className="menu-item">
              <a
                href="#testimonial"
                className="text-[#4A060D] hover:text-[#c86358] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
            </li> */}
            <li className="menu-item">
              <a
                href="#pricing"
                className="text-[#4A060D] hover:text-[#c86358] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Plans & Pricing
              </a>
            </li>
            <li className="menu-item">
              <a
                href="#blog"
                className="text-[#4A060D] hover:text-[#c86358] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
            </li>
            <li className="menu-item">
              <a
                href="#contact"
                className="text-[#4A060D] hover:text-[#c86358] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
