import React from "react";

const Bank = () => {
  return (
    <>
      <h1 className="heading">BFSI</h1>
      <section className="about">
        <img src={require("../../../assests/BFSI.png")} alt="" />
        <div className="content">
          <h1>BFSI</h1>
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

export default Bank;
