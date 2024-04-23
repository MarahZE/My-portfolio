import React from "react";
import "./Projects.css";
import project1_img from "../../assets/project1.png";
import project2_img from "../../assets/project2.png";
import project3_img from "../../assets/project3.png";

const mywork_data = [
  {
    w_no: 1,
    w_name: "Photo house",
    w_img: project1_img,
  },
  {
    w_no: 2,
    w_name: "Beauty home",
    w_img: project2_img,
  },
  {
    w_no: 3,
    w_name: "My Diary",
    w_img: project3_img,
  },
];

const Porjects = () => {
  return (
    <div className="projects">
      <div className="project-title">
        <h1>My latest work</h1>
      </div>
      <div className="projects-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Porjects;
