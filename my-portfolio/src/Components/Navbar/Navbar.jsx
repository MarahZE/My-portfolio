import React, { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import icon from "../../assets/github.svg";
import iconLinkedin from "../../assets/linkedin.svg";
import iconmail from "../../assets/mail.svg";
import menu_open from "../../assets/menuopen.svg";
import menu_close from "../../assets/x-letter.svg";
import { Link as AnchorLink, Events, scrollSpy } from "react-scroll";
import MovingComponent from "react-moving-text";

const Navbar = () => {
  const menuRef = useRef();

  //var userName = "Marah Zeibak";
  const [userName, setUserName] = useState("Marah Zeibak");

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleSetActive = (to) => {
    switch (to) {
      case "Header":
        setUserName("Marah Zeibak");
        break;
      case "About":
        setUserName("About me");
        break;
      case "Projects":
        setUserName("Projects");
        break;
      default:
        setUserName("Marah Zeibak");
    }
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  

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
        <h2>{userName}</h2>
      </MovingComponent>
      <img src={menu_open} onClick={openMenu} alt="open menu" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="close menu"
          className="nav-mob-close"
        />
        <li>
          {" "}
          <AnchorLink to="Header" onClick={closeMenu} spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>
            Home{" "}
          </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink to="About" onClick={closeMenu} spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>
            About me{" "}
          </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink to="Projects" onClick={closeMenu} spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>
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
