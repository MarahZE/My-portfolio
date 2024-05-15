import React from "react";
import MovingComponent from "react-moving-text";
import "./Header.css";
import backgrund from "../../assets/backgrundLarge.jpeg";
import small from "../../assets/backgrundSmall.jpeg";

const Header = () => {
  return (
    <div id="Header" className="header">
      <div className="background-img">
        <img src={backgrund} alt="hero image"className="imageBig"/>
        <img src={small} alt="hero image"  className="imageSmall"/>
      </div>
      <h1>
        Hi, I'm{" "}
        <span style={{ display: "inline-block" }} className="span-text">
          <MovingComponent
            type="squeezeVertical"
            duration="2000ms"
            delay="0.2s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            Marah Zeibak{" "}
          </MovingComponent>{" "}
        </span>
        , a recent graduate in computer science from Stockholm University.
      </h1>
    </div>
  );
};

export default Header;
