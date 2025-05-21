import React, { useEffect, useState } from "react";
import Preloader from "../../Components/Preloader";
import Header from "../../Components/Header";
import Hero from "../../Components/Hero";
import Services from "../../Components/Services";
import Portfolio from "../../Components/Portfolio";
import About from "../../Components/About";
import Testimonials from "../../Components/Testimonials";
import Pricing from "../../Components/Pricing";
import Blog from "../../Components/Blog";
import Clients from "../../Components/Clients";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import Counter from "../../Components/Counter";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="dtr-wrapper" className="overflow-hidden">
        {loading && <Preloader />}
        <Header />
        <Hero />
        {/* <Services /> */}
        <Portfolio />
        <About />
        <Counter />
        {/* <Testimonials /> */}
        <Pricing />
        <Blog />
        {/* <Clients /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
