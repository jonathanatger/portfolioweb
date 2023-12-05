import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { lenis } from "../../AppIndex";

let lastSavedCoordinates = 0;

export const ProjectDisplay = function (props) {
  const [fullDisplay, setFullDisplay] = useState(false);

  const nodeRef = useRef(null);
  const secondNodeRef = useRef(null);

  const onClick = function () {
    props.onClickSetHomepageDisplay(props.id);

    if (!fullDisplay) {
      lastSavedCoordinates = window.scrollY;
      window.scrollTo(0, document.getElementById(props.id).offsetTop);
      lenis.stop();
    } else {
      window.scrollTo(0, lastSavedCoordinates);
      lenis.start();
    }
    // document.body.classList.add("disable-scroll");
    // document.documentElement.classList.add("disable-scroll");
    // document.getElementById("main-grid").classList.add("disable-scroll");

    setFullDisplay(!fullDisplay);

    // console.log(document.getElementById(props.id).offsetTop);
  };

  return (
    <div
      id={props.id}
      className={"projects-individual-project" + props.additionalCss}
    >
      <img
        src={props.source}
        className="projects-image"
        alt="Picture of a project"
        onClick={onClick}
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
