import React from "react";

const About = ({ heading }) => {
  return (
    <>
      <h1 className="heading">{heading}</h1>
      <section className="about">
        <img src={require("../../../assests/aboutImg.jpg")} alt="" />
        <div className="content">
          <h2>Lorem ipsum dolor </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            tempore aperiam. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Magnam voluptatum ut eius voluptas aliquid cum minima odit ex
            veniam iusto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            tempore aperiam. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Magnam voluptatum ut eius voluptas aliquid cum minima odit ex
            veniam iusto.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
