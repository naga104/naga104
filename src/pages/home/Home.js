import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
// import CallToAction from "./components/CallToAction";
import Faq from "./components/Faq";
import Footer from "../../components/Footer/Footer";

import "../home/Homestyles.css";

import CoreServies from "./components/CoreServices";
import Integration from "./components/Integration";
import Telecom from "../Telecom/Bss";
import Gallery from "./components/Gallery";
import Bfsi from "../BFSI/Bfsi";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Telecom />
      <Bfsi/>
      <CoreServies />
      <Integration />
      <Gallery />
      <Services />
      {/* <CallToAction /> */}
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
