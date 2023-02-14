import React from "react";
import Footer from "../../components/Footer/Footer";
import Navabar from "../home/components/Navabar";
import Coumminication from "./Coumminication";
import TestingCards from "./TestingCards";

const Telecom = () => {
  return (
    <>
      <Navabar />
      <TestingCards />
      <Coumminication />
      <Footer />
    </>
  );
};

export default Telecom;
