import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar/Navbar";
import Card from "./components/Card";

import "./PricingStyles.css";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <Header heading="Pricing Page" />
      <Card />
      <Footer />
    </>
  );
};

export default Pricing;
