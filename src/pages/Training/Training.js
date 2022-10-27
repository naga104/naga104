import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar/Navbar";
import About from "../home/components/About";

const Training = () => {
  return (
    <>
      <Navbar />
      <Header heading="Training Page" />
      <About heading="Training" />
      <Footer />
    </>
  );
};

export default Training;
