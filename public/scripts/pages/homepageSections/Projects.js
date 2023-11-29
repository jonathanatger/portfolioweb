import React from "react";

export const ProjectDisplay = function (props) {
  return (
    <div
      id={props.id}
      className={"projects-individual-project" + props.additionalCss}
    >
      <img
        src={props.source}
        className="projects-image"
        alt="Picture of a project"
        onClick={() => {
          props.onClick(props.id);
        }}
      ></img>

      <div className="projects-info">
        <h1 className="projects-title">{props.title}</h1>
        <h2>{props.description}</h2>
      </div>
    </div>
  );
};
