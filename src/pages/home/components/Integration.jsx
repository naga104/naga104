import React from "react";

// import Navbar from '../../../components/Navbar/Navbar';

const Integration = () => {
  return (
    <>
      {/* <Navbar /> */}

      <h1 className="heading">Integration Servies</h1>
      <section className="about">
        <img
          src={require("../../../assests/business.jpg")}
          alt=""
          className="rounded-3xl"
        />
        <div className="content">
          <h1>Integration Servies</h1>
          <p className="text-justify">
            Telecommunications are the means of electronic transmission of
            information over distances. The information may be in the form of
            voice telephone calls, data, text, images, or video. Today,
            telecommunications are used to organize more or less remote computer
            systems into telecommunications networks.
          </p>
          <p className="text-justify">
            Telecommunications are the means of electronic transmission of
            information over distances. The information may be in the form of
            voice telephone calls, data, text, images, or video. Today,
            telecommunications are used to organize more or less remote computer
            systems into telecommunications networks.
          </p>
        </div>
      </section>
    </>
  );
};

export default Integration;
