import React from "react";
import video from "../../../assests/Pexels Videos 1851190.mp4";
import image from "../../../assests/Celcom.png"

const Hero = () => {
  return (
    <div className="hero">
      <video src={video} loop muted autoPlay></video>
      <div className="content">
        <img src={image} alt=""/>
        <p>
          Extensive experience in Systems Integration, Consulting and Large
          Transformations on Telecom OSS/BSS, Enterprise business, and Smart Cities.
          we also accelerate large banking transformations through effective integration
          of domain, technology and future strategy.
        </p>
    
      </div>
    </div>
  );
};

export default Hero;
