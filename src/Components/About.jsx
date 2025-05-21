import React from "react";
import about from "../assets/images/about-img2.jpg";

const About = () => {
  return (
    <section id="about" className="dtr-section lg:py-40 py-26 bg-secondary-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-y-30">
          {/* Left Column - Image & Signature */}
          <div className="w-full lg:w-1/2 ">
            <div className="dtr-about2 relative p-0 md:p-[0_10%]">
              {/* Image Wrapper */}
              <div className="dtr-about2__img relative overflow-hidden rounded-lg">
                {/* Main Image */}
                <figure className="mb-0">
                  <img
                    src={about}
                    alt="about image"
                    className="w-full h-auto transition-all duration-500 hover:scale-105"
                  />
                </figure>
              </div>

              {/* Signature */}
              <div className="dtr-about2__sign-wrap absolute bottom-[-75px] right-[60px] z-20 animate__animated animate__fadeInUp animate__delay-200ms">
                <p className="dtr-about2__sign font-mrs-saint text-[#4A060D] m-0 leading-none">
                  Emanuel Rogers
                </p>
                <p className="font-semibold text-[#4A060D]">
                  Creative Director
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2 mt-10 md:mt-0 md:pl-10">
            <h1
              className="text-5xl md:text-7xl leading-[1.2] tracking-[-2px] mb-5 text-[#4A060D]"
              style={{
                fontFamily: `'Manrope', Arial, Helvetica, sans-serif`,
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              I'm artist at heart, and it shows.
            </h1>
            <h2 className="text-[4.067em] leading-[1.2] mb-5 text-primary"></h2>
            <div className="spacer h-5"></div>
            <h6 className="text-lg font-semibold text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua quis
              ipsum spendisse ultrices.
            </h6>
            <div className="spacer h-5"></div>
            <p className="mb-3 text-gray-600">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable.
            </p>
            <p className="mb-8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* Download CV Button */}
            <a
              href="#"
              className="py-4 px-5 bg-[#4A060D] text-white text-lg hover:bg-[#C86358] hover:text-white transition-colors duration-300 rounded-md shadow-lg"
            >
              Download CV
              <i className="icon-cloud-arrow-down-solid ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
