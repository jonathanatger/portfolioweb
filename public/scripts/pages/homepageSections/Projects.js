import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

export const ProjectDisplay = function (props) {
  const [fullDisplay, setFullDisplay] = useState(false);

  const nodeRef = useRef(null);
  const secondNodeRef = useRef(null);

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
          props.onClickUpdateState(props.id);
          setFullDisplay(!fullDisplay);
        }}
      ></img>

      <div className="projects-info">
        <CSSTransition
          nodeRef={secondNodeRef}
          in={fullDisplay}
          timeout={200}
          classNames="project-description"
        >
          <h1 ref={secondNodeRef} className="projects-title">
            {props.title}
          </h1>
        </CSSTransition>

        <CSSTransition
          nodeRef={nodeRef}
          in={fullDisplay}
          timeout={200}
          classNames="project-description"
          unmountOnExit
        >
          <div ref={nodeRef}>
            <h2>{props.description}</h2>
            <div className="">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};
