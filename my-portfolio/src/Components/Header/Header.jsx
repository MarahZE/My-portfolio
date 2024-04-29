import React from "react";
import "./Header.css";
import profile_img from '../../assets/profile.jpg';

const Header = () => {
  return (
    <div id = 'Header' className="header">
      <h1>
        Jag är nyutexaminerad datavetenskapsstudent från Stockholms universitet.
      </h1>
      <p>
        Som en datavetenskapsstudent som examineras 2024 från Stockholms
        universitet, har jag uppnått kompetens inom programvaruutveckling,
        databaser, algoritmer och webbutveckling. Min utbildning har finslipat
        mina färdigheter och passion för att skapa innovativa lösningar. Jag ser
        fram emot att samarbeta och bidra till banbrytande projekt.
      </p>
      <div className="header-action">
        <div className="header-connect">Connect With Me</div>
        <div className="header-resume">My resume</div>
      </div>
    </div>
  );
};

export default Header;
