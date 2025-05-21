import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mark Robison",
      role: "Founder@ACME Inc.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      image: "/assets/images/testm-user3-100x100.jpg",
    },
    {
      id: 2,
      name: "Thomas Luze",
      role: "CTO, MUW Studio",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      image: "/assets/images/testm-user1-100x100.jpg",
    },
  ];

  return (
    <section id="testimonial" className="bg-secondary-light py-[100px]">
      <div className="container">
        <div className="text-center mb-[50px]">
          <h2 className="text-[4.067em]">What People Say</h2>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          className="dtr-testimonial-carousel"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="text-center max-w-4xl mx-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[100px] h-[100px] rounded-full mx-auto mb-8"
                />
                <p className="text-lg italic mb-8">"{testimonial.text}"</p>
                <div className="mt-10">
                  <h5 className="text-xl font-bold">{testimonial.name}</h5>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
