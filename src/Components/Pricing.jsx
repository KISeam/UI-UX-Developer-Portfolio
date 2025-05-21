import { text } from "framer-motion/client";
import React from "react";

const Pricing = () => {
  const plans = [
    {
      title: "Weekly",
      price: 99,
      tagline: "Most Affordable",
      features: [
        "3 Revisions Per Project",
        "Limited Customization",
        "Limited Updates",
        "24/7 Support",
        "SEO & Marketing Tips",
      ],
      icon: "icon-baby-carriage-solid",
      colorScheme: "bg-[#f5eae6] text-[#333] hover:bg-[#eee]",
      btnBg: "bg-[#4A060D]",
      btnHover: "hover:bg-[#C86358]",
      textColor: "text-white",
    },
    {
      title: "Projectwise",
      price: 399,
      tagline: "Value for Money",
      features: [
        "Unlimited Revisions",
        "Complete Customization",
        "Unlimited updates",
        "24/7 Priority Support",
        "Full SEO Optimization",
      ],
      icon: "icon-shuttle-space-solid",
      colorScheme: "bg-[#4A060D] text-white hover:bg-[#C86358]",
      btnBg: "bg-white text-[#4A060D]",
      btnHover: "hover:bg-[#f5eae6]",
      textColor: "text-[#4A060D]",
    },
    {
      title: "Monthly",
      price: 199,
      tagline: "Most Affordable",
      features: [
        "6 Revisions Per Project",
        "Moderate Customization",
        "Limited Updates",
        "24/7 Support",
        "SEO & Marketing Tips",
      ],
      icon: "icon-truck-monster-solid",
      colorScheme: "bg-[#C86358] text-white hover:bg-[#a74339]",
      btnBg: "bg-white text-[#4A060D]",
      btnHover: "hover:bg-[#f5eae6]",
      textColor: "text-[#4A060D]",
    },
  ];

  return (
    <section id="pricing" className="lg:py-40 py-26 bg-secondary-light">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl leading-[1.2] font-bold text-[#4A060D] text-center">
            Plans & Pricing
          </h1>
          <h1 className="text-[3rem] font-bold mb-4"></h1>
          <p className="text-gray-600">
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl text-center p-8 shadow-lg transition-all duration-300 ${plan.colorScheme}`}
            >
              {/* Tagline */}
              <div className="text-sm font-bold uppercase mb-4 opacity-80">
                {plan.tagline}
              </div>

              {/* Icon */}
              {/* <div className="w-[140px] h-[140px] mx-auto relative flex items-center justify-center mb-6">
                <div className="absolute w-full h-full border-[6px] border-dashed rounded-full animate-spin-slow border-current opacity-30"></div>
                <span className="text-5xl">
                  <i className={plan.icon}></i>
                </span>
              </div> */}

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>

              {/* Features */}
              <ul className="text-left mb-6 space-y-2 max-w-xs mx-auto">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-green-500">
                      <i className="icon-check"></i>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <p className="text-4xl font-bold mb-6">
                <span className="text-base align-super">$</span>
                {plan.price}
              </p>

              {/* Button */}
              <a
                href="#"
                className={`inline-block px-6 py-3 rounded-md font-medium transition-colors duration-300 ${plan.btnBg} ${plan.btnHover} ${plan.textColor}`}
              >
                Get Started Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
