import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Redesign",
      category: ["uiux", "web"],
      image: "https://agentestudio.com/uploads/ckeditor/pictures/2522/content_dringet_food_ordering_app.png",
      subtitle: "UI/UX Design / Web",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: ["uiux", "creative"],
      image: "https://static.tildacdn.com/tild3961-3832-4935-a463-346665373966/bank-app-development.png",
      subtitle: "UX Research / Mobile App",
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      category: ["uiux", "branding"],
      image: "https://www.gooddata.com/img/blog/_2000xauto/patient-outcomes-1-.png.webp",
      subtitle: "Dashboard / UI Kit",
    },
    {
      id: 4,
      title: "Fitness App",
      category: ["uiux", "creative"],
      image: "https://cdn.prod.website-files.com/6451597c62e55d5ea41332a5/6581054d151ed7f8823f4769_Create-Your-Own-Fitness-App-5.png",
      subtitle: "Mobile App / UX Flow",
    },
    {
      id: 5,
      title: "Marketing Website",
      category: ["branding", "web"],
      image: "https://wrapmarketusercontent.com/assets/items/thumb/5e3b87f14717bcd57efb46065ddaa5bf631c05b286474522bb6b54976bc96c60.webp?v=1736080992",
      subtitle: "Web Design / Storytelling",
    },
    {
      id: 6,
      title: "Logo System",
      category: ["branding", "creative"],
      image: "https://pixelsink.com/wp-content/uploads/2021/07/Big-Brand-Pride-Logos.png",
      subtitle: "Logo / Brand Identity",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category.includes(activeFilter));

  return (
    <section id="works" className="bg-[#f5eae6] lg:pb-40 pb-26">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-center text-[#4A060D]">My Works</h1>
        <div className="h-[50px]"></div>

        {/* Filter Nav */}
        <div className="text-center mb-10">
          <ul className="inline-flex flex-wrap justify-center gap-x-10 text-lg font-semibold bg-white py-4 px-8 rounded-full shadow-md">
            {["all", "uiux", "branding", "creative", "web"].map((filter) => (
              <li key={filter}>
                <button
                  onClick={() => setActiveFilter(filter)}
                  className={`capitalize transition duration-300 cursor-pointer ${
                    activeFilter === filter ? "text-[#c86358]" : "text-[#4A060D]"
                  }`}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative overflow-hidden group rounded-xl shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#4A060D] text-white p-4 translate-y-full group-hover:translate-y-0 transition-all duration-500">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-sm mt-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
