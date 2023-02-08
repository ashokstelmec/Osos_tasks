import React from "react";
import "./Header.css";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="design">
          <span className="d-1">
            <RiCheckboxBlankCircleFill />
          </span>
          &nbsp;
          <span className="d-2">
            <RiCheckboxBlankCircleFill />
          </span>
          <br />
          <span className="d-3">
            <RiCheckboxBlankCircleFill />
          </span>
          &nbsp;
          <span className="d-4">
            <RiCheckboxBlankCircleFill />
          </span>
        </div>
        <div>
          <ul className="navbar">
            <li className="home">Home</li>
            <li>Language</li>
            <li>Genre</li>
            <li>Account</li>
            <i id="solid" className="fa-solid fa-bars"></i>
          </ul>
        </div>
      </div>
      <div className="border-1"></div>
      <div className="border-2"></div>
    </div>
  );
};

export default Header;
