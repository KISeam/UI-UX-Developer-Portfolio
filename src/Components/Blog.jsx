import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import blogImg1 from "../assets/images/blog-1.jpeg";
import blogImg2 from "../assets/images/blog-2.png";
import blogImg3 from "../assets/images/blog-3.png";

const Blog = () => {
  return (
    <section id="blog" className="bg-[#F9F1F1] py-[100px]">
      <div className="container mx-auto px-4">
        {/* Intro */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center mb-12"> */}
        <h1 className="text-5xl md:text-7xl leading-[1.2] font-bold text-[#4A060D] text-center mb-10">
          Recent Articles
        </h1>
        {/* <a
            href="#"
            className="bg-[#4A060D] text-white px-6 py-3 rounded hover:bg-[#3b050a] transition"
          >
            View More
          </a> */}
        {/* </div> */}

        {/* Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="h-full bg-white shadow-xl rounded-lg overflow-hidden flex flex-col">
              <div className="relative w-full">
                <img
                  src={blogImg1}
                  alt="UI Principles Every Designer Should Know"
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute bottom-0 left-0 px-4 py-1 bg-[#4A060D] text-white text-sm font-bold">
                  UI Design
                </div>
              </div>
              <div className="flex flex-col justify-between p-6 flex-1">
                <div>
                  <div className="text-sm text-gray-600 mb-2">
                    <span>May 10, 2025</span>
                    <span className="mx-2">•</span>
                    <span>Tanvir</span>
                  </div>
                  <h5 className="text-lg font-semibold mb-2">
                    UI Principles Every Designer Should Know
                  </h5>
                  <p className="text-gray-700 text-sm">
                    Learn the foundational UI design rules that improve
                    usability and engagement.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="h-full bg-white shadow-xl rounded-lg overflow-hidden flex flex-col">
              <div className="relative w-full">
                <img
                  src={blogImg2}
                  alt="UX Psychology: How Design Influences Behavior"
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute bottom-0 left-0 px-4 py-1 bg-[#4A060D] text-white text-sm font-bold">
                  UX Research
                </div>
              </div>
              <div className="flex flex-col justify-between p-6 flex-1">
                <div>
                  <div className="text-sm text-gray-600 mb-2">
                    <span>April 27, 2025</span>
                    <span className="mx-2">•</span>
                    <span>Tanvir</span>
                  </div>
                  <h5 className="text-lg font-semibold mb-2">
                    UX Psychology: How Design Influences Behavior
                  </h5>
                  <p className="text-gray-700 text-sm">
                    Discover how cognitive biases and psychology shape user
                    interactions.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="h-full bg-white shadow-xl rounded-lg overflow-hidden flex flex-col">
              <div className="relative w-full">
                <img
                  src={blogImg3}
                  alt="Top UX Trends to Watch in 2025"
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute bottom-0 left-0 px-4 py-1 bg-[#4A060D] text-white text-sm font-bold">
                  UX Trends
                </div>
              </div>
              <div className="flex flex-col justify-between p-6 flex-1">
                <div>
                  <div className="text-sm text-gray-600 mb-2">
                    <span>March 30, 2025</span>
                    <span className="mx-2">•</span>
                    <span>Tanvir</span>
                  </div>
                  <h5 className="text-lg font-semibold mb-2">
                    Top UX Trends to Watch in 2025
                  </h5>
                  <p className="text-gray-700 text-sm">
                    Stay ahead with these emerging UX strategies, patterns, and
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
