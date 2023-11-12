import React from "react";
import BlogImage from "../../../content/CaptureOB.png";

const ProjectImage = function (props) {
  return (
    <div>
      <img
        src={props.source}
        className="projects-image"
        alt="Picture of a project"
      ></img>
    </div>
  );
};

const Projects = function () {
  return (
    <div className="projects-main-container">
      <div className="projects-pictures-container">
        <ProjectImage source={BlogImage} />
        <img
          src={BlogImage}
          className="projects-image"
          alt="Picture of a project"
        ></img>
      </div>
      <div className="projects-info-container">
        <h1>This is a title</h1>
      </div>
    </div>
  );
};

export default Projects;
