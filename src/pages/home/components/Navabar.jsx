import React, { useState } from "react";
import { Link } from "react-router-dom"; // link tags
import { FaTimes, FaBars } from "react-icons/fa"; // for icons
import image from "../../../assests/Celcom.png"
import "./Navabar.css"
const Navabar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="color">
      <div className="logo">
        <Link to="/">
          <img src={image} alt=""/>
        </Link>
      </div>
      <div className={click ? "menu active" : "menu"}>
        <Link to="/">Home</Link>
        <Link to="/telecom">Telecom</Link>
        <Link to="/BFSI">BFSI</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes style={{ color: "white" }} size={25} />
        ) : (
          <FaBars style={{ color: "white" }} size={25} />
        )}
      </div>
    </nav>
  );
};

export default Navabar;
