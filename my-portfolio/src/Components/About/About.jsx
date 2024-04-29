import React from "react";
import "./About.css";
import img from '../../assets/profile-img.jpg';

const About = () => {
  return (
    <div id='About' className="about">
        <div className="about-title">
            <h1>About me</h1>
        </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Som en datavetenskapsstudent som examineras 2024 från Stockholms
              universitet, har jag uppnått kompetens inom programvaruutveckling,
              databaser, algoritmer och webbutveckling. Min utbildning har
              finslipat mina färdigheter och passion för att skapa innovativa
              lösningar. Jag ser fram emot att samarbeta och bidra till
              banbrytande projekt.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>
                HTML & CSS <hr/>
              </p>
            </div>
            <div className="about-skill">
              <p>
                React JS <hr style={{ width: "60%" }} />
              </p>
            </div>
            <div className="about-skill">
              <p>
                JavaScript <hr style={{ width: "70%" }} />
              </p>
            </div>
            <div className="about-skill">
              <p>
                Next JS <hr style={{ width: "50%" }} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
