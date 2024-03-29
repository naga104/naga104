import React from "react";
import pic1 from "../../assests/5g.jpg";
import pic2 from "../../assests/5g.jpg";
import pic3 from "../../assests/5g.jpg";
import pic4 from "../../assests/5g.jpg";
import pic5 from "../../assests/5g.jpg";
import pic6 from "../../assests/5g.jpg";
import pic7 from "../../assests/5g.jpg";

const Bss = () => {
  return (
    <>
      <div className="pt-32 px-8 py-8">
        <li className="lg:text-3xl text-2xl font-bold mb-8 text-center uppercase">
          Digital BSS
        </li>
        <div className="lg:grid lg:grid-cols-3 gap-8 justify-items-center flex flex-col cursor-pointer">
          <Pictute
            pic={pic1}
            title=" Analysis and Design"
          />
          <Pictute
            pic={pic2}
            title="Oracle: Oracle BRM & ECE Implementation"
          />
          <Pictute
            pic={pic3}
            title="Oracle BRM & ECE Upgrade"
          />
          <Pictute
            pic={pic4}
            title="Oracle BRM & ECE Cloud Native Specialization"
          />
          <Pictute
            pic={pic5}
            title="Oracle BRM & ECE Integration"
          />
          <Pictute
            pic={pic6}
            title="Oracle AIA Implementation"
          />
        </div>
      </div>
    </>
  );
};

export default Bss;
function Pictute({ pic, title }) {
  return (
    <div className="campus-col">
      <img src={pic} alt="" />
      <div className="layer">
        <h3 className="text-center">{title}</h3>
      </div>
      {/* <div className="flex justify-center w-full h-full items-center bg-black50">
        <button className="bg-white p-4 rounded text-xl font-bold uppercase mx-8">
          {title}
        </button>
      </div> */}
    </div>
  );
}
