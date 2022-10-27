import React from "react";
import "./Header.css";
import headerImg from "../assests/headerImg.jpg";

const Header = ({ heading }) => {
  return (
    <>
      <section
        className="header"
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "fixed",
        }}
      >
        <h1>{heading}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
          accusantium.
        </p>
      </section>
    </>
  );
};

export default Header;
