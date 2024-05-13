import React from "react";
import "./Header.css";
import backgrund from '../../assets/backgrund.jpg';




const Header = () => {

  return (
    <div id="Header" className="header">
    <div className="background-img">
      <img src={backgrund} alt="" />
    </div>
    <h1>
     Hi, I'm Marah Zeibak, a recent graduate in computer science from Stockholm University.
    </h1>
  </div>
  );
};

export default Header;
