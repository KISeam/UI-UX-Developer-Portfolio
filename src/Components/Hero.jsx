import React from 'react';
import { FaWhatsapp, FaBehance, FaDribbble } from 'react-icons/fa';
import circle from '../assets/images/circle-stripes.png';
import aboutImg from '../assets/images/about-img1.jpg';
import rhom1 from '../assets/images/rhom1.png';

const Hero = () => {
  return (
    <section 
      className="hero-section bg-[#f5eae6] lg:py-40 py-26" 
      style={{
        fontFamily: `'Manrope', Arial, Helvetica, sans-serif`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-y-30">

          {/* Right Column */}
          <div className="w-full lg:w-1/2 mt-10 md:mt-0 md:pl-10">
            <div className="dtr-about relative group">
              <figure className="dtr-about__img overflow-hidden">
                <img 
                  src={aboutImg} 
                  alt="about image" 
                  className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105" 
                />
              </figure>
              <div className="absolute left-0 top-4/5 transform -translate-y-1/2 group-hover:translate-x-4 transition-transform duration-300 ease-in-out">
                <h6 
                  className="text-white bg-[#c86358] px-4 py-2 animate__animated animate__fadeInLeft"
                  style={{
                    fontFamily: `'Manrope', Arial, Helvetica, sans-serif`,
                    fontSize: '1.6em',
                    fontWeight: 700,
                    lineHeight: 1.5,
                  }}
                >
                  Creative Director
                </h6>
                <span 
                  className="text-white bg-[#4A060D] px-4 py-2 mt-2 block animate__animated animate__fadeInLeft animate__delay-300ms"
                  style={{
                    fontFamily: `'Manrope', Arial, Helvetica, sans-serif`,
                    fontSize: '1.2em',
                    fontWeight: 700,
                    lineHeight: 1.5,
                  }}
                >
                  Based in Milan
                </span>
              </div>
              <span className="dtr-rhom-shape absolute right-[-63px] bottom-[30px]">
                <img src={rhom1} alt="shape" />
              </span>
            </div>
          </div>

          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <div className="hero-wheel-wrap relative z-10">
              <div className="dtr-rotating-img hero-wheel absolute left-[-90px] top-[-60px] z-[-1]">
                <div className="animate__animated animate__rollIn animate__delay-600ms">
                  <img 
                    src={circle} 
                    alt="circle" 
                    width="227" 
                    height="228" 
                    className="w-[227px] h-[228px]"
                  />
                </div>
              </div>
              <h1 
                className="text-5xl md:text-8xl leading-[1.2] tracking-[-2px] mb-5 text-[#4A060D]"
                style={{
                  fontFamily: `'Manrope', Arial, Helvetica, sans-serif`,
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Hi There, I am Emanuel.
              </h1>
              <div className="spacer h-5"></div>
              <div className="hero-text-shrink max-w-[75%]">
                <h6 
                  className="text-[#c86358]"
                  style={{
                    fontFamily: `'Manrope', Arial, Helvetica, sans-serif`,
                    fontSize: '1.2em',
                    fontWeight: 700,
                    lineHeight: 1.5,
                    letterSpacing: '-0.3px',
                  }}
                >
                  Let's create something awesome.
                </h6>
                <div className="spacer h-5"></div>
                <p 
                  className="mb-5 text-[#8d6267]"
                  style={{
                    fontFamily: `'Manrope', Arial, Helvetica, sans-serif`,
                    fontSize: '15px',
                    lineHeight: 1.5,
                  }}
                >
                  Having focus on <b>Web</b> and <b>Graphic Design</b> mainly Branding, I am always ready for new proposals. 
                  You can learn about me and my work in this <b>CV</b>!
                </p>
                <div className="dtr-social-widget text-left mt-4">
                  <ul className="dtr-social flex space-x-4">
                    <li>
                      <a 
                        href="#" 
                        title="Whatsapp" 
                        target="_blank" 
                        rel="nofollow" 
                        aria-label="Whatsapp"
                        className="dtr-whatsapp w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white hover:bg-green-600 transition"
                      >
                        <FaWhatsapp size={16} />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#" 
                        title="Behance" 
                        target="_blank" 
                        rel="nofollow" 
                        aria-label="Behance"
                        className="dtr-behance w-8 h-8 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm3.18 11.36L12 15.7l-3.18-2.34.74-4.34 3.18 2.34 3.18-2.34.74 4.34z"/>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#" 
                        title="Dribbble" 
                        target="_blank" 
                        rel="nofollow" 
                        aria-label="Dribbble"
                        className="dtr-dribbble w-8 h-8 bg-[#ea4c89] rounded-full flex items-center justify-center text-white hover:bg-[#d63f7b] transition"
                      >
                        <FaDribbble size={16} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;