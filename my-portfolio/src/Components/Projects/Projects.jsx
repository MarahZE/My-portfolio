import React from "react";
import "./Projects.css";
import project1_img from "../../assets/project1.png";
import project2_img from "../../assets/project2.png";
import project3_img from "../../assets/project3.png";
import project4_img from "../../assets/project4.png";
import project5_img from "../../assets/project5.png";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const mywork_data = [
  {
    w_no: 1,
    w_name: "Photo house",
    w_img: project1_img,
    w_link: "https://github.com/MarahZE/Photo-House",
  },
  {
    w_no: 2,
    w_name: "Beauty home",
    w_img: project2_img,
    w_link: "https://github.com/MarahZE/e-handel",
  },
  {
    w_no: 3,
    w_name: "My Diary",
    w_img: project3_img,
    w_link: "https://github.com/MarahZE/android-mobil-app",
  },
  {
    w_no: 4,
    w_name: "FTPServer-Client",
    w_img: project4_img,
    w_link: "https://github.com/MarahZE/FTPServer-Client",
  },
  {
    w_no: 5,
    w_name: "NoteApp",
    w_img: project5_img,
    w_link: "https://github.com/MarahZE/NoteApp_MVCApplication",
  }
];

const handelClick= () => console.log("Hello");

const Projects = () => {
  return (
    <div id = 'Projects' className="projects">
      <div className="project-title">
        <h1>Projects</h1>
      </div>
      <div className="projects-container">
        {mywork_data.map((work, index) => {
         return (
            <div key={index} className="project">
              <h3>{work.w_name}</h3>
              <Zoom>
              <img src={work.w_img} alt={work.title} onClick={handelClick}/>
              </Zoom>
              <a href={work.w_link}>Go to github repo</a>
            </div>
          );;
        })}
      </div>
    </div>
  );
};

export default Projects;
