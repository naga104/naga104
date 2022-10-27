import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import CallToAction from "./components/CallToAction";
import Faq from "./components/Faq";
import Footer from "../../components/Footer/Footer";

import "../home/Homestyles.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About heading="About Us" />
      <Services />
      <CallToAction />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
