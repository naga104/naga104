import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../../assests/bank.png"
import img2 from "../../../assests/bank2.jpg";
// import img3 from "../../../assests/bank3.jpg";
// import img4 from "../../../assests/telecom.jpg";

import Slider from "react-slick";

import React from "react";

const Services = () => {
  const images = [img1, img2, img1, img2, ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <h1 className="heading">Services</h1>
      <section className="services">
        <Slider {...settings}>
          {images.map((image) => {
            return (
              <div key={image}>
                <img src={image} alt="" />
              </div>
            );
          })}
          {/* <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div> */}
        </Slider>
      </section>
    </>
  );
};

export default Services;
