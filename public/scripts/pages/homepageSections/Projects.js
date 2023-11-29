import React from "react";

export const ProjectImage = function (props) {
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
