import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="logo">sunnyside</div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">About</li>
        <li className="nav-item">Services</li>
        <li className="nav-item">Projects</li>
        <li className="nav-item">Contact</li>
      </ul>

      <div className="hamburger " onClick={handleClick}>
        {click ? (
          <FaTimes size={30} className="text-[var(--White)]" />
        ) : (
          <FaBars size={30} className="text-[var(--White)]" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
