import React from "react";
import Footer from "../../components/Footer/Footer";
import Navabar from "../home/components/Navabar";
import Bss from "./Bss";
import TestingCards from "./TestingCards";

const Telecom = () => {
  return (
    <>
      <Navabar />
      <TestingCards />
      <Bss />
      <Footer />
    </>
  );
};

export default Telecom;
