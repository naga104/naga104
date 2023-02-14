import React from "react";
import pic1 from "../../assests/business.jpg";
import pic2 from "../../assests/business.jpg";
import pic3 from "../../assests/business.jpg";
import pic4 from "../../assests/business.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TestingCards = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" lg:px-20 px-10 lg:py-20 py-10">
      <div>
        <Card1
          pic={pic1}
          title="Development of Applications"
          desc="Application Development
      Internet Development
      Analysis and Design."
        />
        <Card2
          pic={pic2}
          title="Developers"
          desc="Continuous Delivery, Test Automation, and Integration
      BitBucket, GitHub, Splunk, Puppet, Docker, Jenkins, Chef, and Ansible are some of the tools."
        />
        <Card1
          pic={pic3}
          title="Management and Product Testing"
          desc="Systems analysis, database management, and QA/software testing
      Tools: Selinum, QTP, Appium, IBM Jazz, Oracle, PL SQL, HP ALM/HP QC, Rally, JIRA, and Cucumber"
        />
        <Card2
          pic={pic4}
          title="New Technologies"
          desc="Tools: Hadoop, Mule, R programming language, Grails &amp; Groovy, Mongo DB, Raven DB"
        />
      </div>
    </div>
  );
};

export default TestingCards;
function Card1({ pic, title, desc }) {
  return (
    <div className="lg:grid lg:grid-cols-2 flex flex-col justify-center items-center mt-20">
      <img
        src={pic}
        className="w-full h-[250px] sm:h-[350px]  rounded-3xl"
        alt=""
        data-aos="fade-right"
        data-aos-duration="1500"
      />
      <div
        className="lg:w-2/3 w-full mx-auto mt-4"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <li className="font-bold text-xl">{title}</li>
        <li className="mt-2">{desc}</li>
      </div>
    </div>
  );
}

function Card2({ pic, title, desc }) {
  return (
    <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse justify-center items-center mt-20">
      <div
        className="lg:w-2/3 w-full  mt-4"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <li className="font-bold text-xl">{title}</li>
        <li className="mt-2">{desc}</li>
      </div>
      <img
        src={pic}
        className="w-full h-[250px] sm:h-[350px] rounded-3xl"
        data-aos="fade-left"
        data-aos-duration="1500"
        alt=""
      />
    </div>
  );
}
