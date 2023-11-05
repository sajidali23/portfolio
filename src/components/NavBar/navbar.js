import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem"></Link>
        <Link className="desktopMenuListItem"></Link>
        <Link className="desktopMenuListItem"></Link>
        <Link className="desktopMenuListItem"></Link>
      </div>
      <button className="desktopMenuBtn">
        <img className="desktopMenuImg" src="" alt="" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
