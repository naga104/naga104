import React, { useState } from "react";
import { Link } from "react-router-dom"; // link tags
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa"; // for icons
import image from "../../assests/Celcom.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const [color, setColor] = useState(false);
  const handleColor = () => {
    if (window.scrollY >= 200) {
      setColor(true);
    }
    if (window.scrollY < 200) {
      setColor(false);
    }
  };
  window.addEventListener("scroll", handleColor);
  return (
    <nav className={color ? "color" : ""}>
      <div className="logo">
        <Link to="/">
          <img src={image} alt="" />
        </Link>
      </div>
      <div className={click ? "menu active" : "menu"}>
        <Link to="/" className="font-medium">
          Home
        </Link>
        <Link to="/telecom" className="font-medium">
          Telecom
        </Link>
        <Link to="/BFSI" className="font-medium">
          BFSI
        </Link>
        <Link to="/contact" className="font-medium">
          Core Networking 
        </Link>
        <Link to="/contact" className="font-medium">
          Integration Services
        </Link>
        <Link to="/contact" className="font-medium">
          Products
        </Link>
        <Link to="/contact" className="font-medium">
        Solutions 
        </Link>
        <Link to="/contact" className="font-medium">
          About Us
        </Link>
        <Link to="/contact" className="font-medium">
          Career
        </Link>
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

export default Navbar;
