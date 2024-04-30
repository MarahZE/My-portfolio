import React, { useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import menu_open from "../../assets/menuopen.svg";
import menu_close from "../../assets/x-letter.svg";
import { Link as AnchorLink } from "react-scroll";

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          {" "}
          <AnchorLink to="Header">Home </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink to="About">About me </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink to="Projects">Porjects </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink to="Contact">Contact</AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
