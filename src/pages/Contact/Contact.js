import React from "react";
import Footer from "../../components/Footer/Footer";

import Navbar from "../../components/Navbar/Navbar";
import Form from "./components/Form";

import "./ContactStyle.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
