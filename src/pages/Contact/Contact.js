import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar/Navbar";
import Form from "./components/Form";

import "./ContactStyle.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Header heading="Contact Page" />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
