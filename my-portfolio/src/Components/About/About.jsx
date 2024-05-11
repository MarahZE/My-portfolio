import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="About" className="about">
      
      <div className="about-sections">
        <div className="about-left">
          <div className="about-para">
          <h1>About me</h1>
            <p>
              As a computer science student graduating in 2024 from Stockholm
              University, I have acquired skills in software development,
              databases, algorithms, and web development. My education has honed
              my skills and passion for creating innovative solutions. I am
              looking forward to collaborating and contributing to
              groundbreaking projects.
            </p>
            
          </div>
        </div>
        <div className="about-right">
          <div className="about-skills">
            <div className="about-skill">
              <h1>Education</h1> <br></br>
              <p>
              STOCKHOLM UNIVERSITY Bachelor in Computer Science 2020-2024
               
              </p>
            </div>
            <div className="about-skill">
              <h1>Technical Skills</h1>
              <p>Web Development: HTML, CSS, JavaScript.</p>
              <p>Languages: Java, C++, C#, JavaScript, PHP.</p>
              <p>Database Management: SQL, NoSQL.</p>
              <p>Algorithm Design and Analysis.</p>
              <p>Software Development.</p>
              <p>
                Human-Computer Interaction (HCI).
                
              </p>
            </div>
            <div className="about-skill">
              <h1>Languages</h1>
              <p>
                English, Swedish 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
