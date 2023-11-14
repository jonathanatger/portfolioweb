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

const ProjectTitle = function (props) {
  return (
    <div className="projects-title-container">
      <h1>{props.title}</h1>
    </div>
  );
};
const Projects = function () {
  return (
    <div className="projects-main-container">
      <div className="projects-pictures-container">
        <ProjectImage source={BlogImage} />
        <ProjectImage source={BlogImage} />
        <ProjectImage source={BlogImage} />
      </div>
      <div className="projects-info-container">
        <ProjectTitle title="Trier locaux avec le machine learning" />
      </div>
    </div>
  );
};

export default Projects;
