import React from "react";
import "./About.css";
import img from "../../assets/profile-img.jpg";

const About = () => {
  return (
    <div id="About" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <div className="about-para">
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
                <hr />
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
                <hr style={{ width: "60%" }} />{" "}
              </p>
            </div>
            <div className="about-skill">
              <h1>Languages</h1>
              <p>
                English, Swedish <hr style={{ width: "50%" }} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
