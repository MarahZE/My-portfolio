import React, { useRef } from "react";
import "./Navbar.css";
import icon from "../../assets/github.svg";
import iconLinkedin from "../../assets/linkedin.svg";
import iconmail from "../../assets/mail.svg";
import menu_open from "../../assets/menuopen.svg";
import menu_close from "../../assets/x-letter.svg";
import { Link as AnchorLink } from "react-scroll";
import MovingComponent from "react-moving-text";

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
      <MovingComponent
        type="fadeInFromTop"
        duration="2000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <h2>Marah Zeibak</h2>
      </MovingComponent>
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
          <AnchorLink to="Header" onClick={closeMenu}>
            Home{" "}
          </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink to="About" onClick={closeMenu}>
            About me{" "}
          </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink to="Projects" onClick={closeMenu}>
            Porjects{" "}
          </AnchorLink>
        </li>
      </ul>

      <div className="icon">
        <MovingComponent
          type="fadeInFromTop"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <a href="https://github.com/MarahZE">
            <img src={icon} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/marah-zeibak">
            <img src={iconLinkedin} alt="" />
          </a>
          <a href="mailto:zeibakmarah@gmail.com">
            <img src={iconmail} alt="" />
          </a>
        </MovingComponent>
      </div>
    </div>
  );
};

export default Navbar;
