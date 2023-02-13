import React from "react";

const Coumminication = () => {
  return (
    <>
      <>
        <h1 className="heading my-6">Telecom</h1>
        <section className="about">
          <img
            src={require("../../../assests/telecom.jpg")}
            alt=""
            className="rounded-3xl"
          />
          <div className="content">
            <h1>Telecom</h1>
            <p className="text-justify">
              Telecommunications are the means of electronic transmission of
              information over distances. The information may be in the form of
              voice telephone calls, data, text, images, or video. Today,
              telecommunications are used to organize more or less remote
              computer systems into telecommunications networks.
            </p>
            <p className="text-justify">
              Telecommunications are the means of electronic transmission of
              information over distances. The information may be in the form of
              voice telephone calls, data, text, images, or video. Today,
              telecommunications are used to organize more or less remote
              computer systems into telecommunications networks.
            </p>
          </div>
        </section>
      </>
    </>
  );
};

export default Coumminication;
