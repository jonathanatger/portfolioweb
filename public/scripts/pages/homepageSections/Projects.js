import React from "react";
import BlogImage from "../../../content/CaptureOB.png";

export const ProjectImage = function (props) {
  console.log(props.source);
  return (
    <div>
      <img
        src={props.source}
        className="projects-image"
        alt="Picture of a project"
        onClick={props.onClick}
      ></img>
    </div>
  );
};

export const ProjectTitle = function (props) {
  return (
    <div className="projects-title-container">
      <h1>{props.title}</h1>
    </div>
  );
};
