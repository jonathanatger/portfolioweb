import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { lenis } from "../../AppIndex.js";
import { HOMEPAGE, PROJECT, CV } from "../HomePage.js";

let lastSavedCoordinates = 0;

export const ProjectDisplay = function (props) {
  const [fullDisplay, setFullDisplay] = useState(false);

  const cssTransitionRef = useRef(null);
  const cssTransitionRef2 = useRef(null);
  const cssTransitionRef3 = useRef(null);

  const projectOverflowStyling = function () {
    if (
      props.informationDisplayed === PROJECT &&
      props.displayedProjectId === props.id
    )
      return " projects-main-scrollbehavior";
    return "";
  };

  const onClick = function () {
    if (!fullDisplay) {
      lastSavedCoordinates = window.scrollY;
      window.scrollTo(0, document.getElementById(props.id).offsetTop);
    } else {
      window.scrollTo(0, lastSavedCoordinates);
    }

    setFullDisplay(!fullDisplay);
    setTimeout(() => {
      props.onClickSetHomepageDisplay(props.id);
    }, 500);
  };

  return (
    <div
      id={props.id}
      className={"projects-individual-project" + props.additionalCss}
    >
      <div className={"projects-image-container" + projectOverflowStyling()}>
        <img
          src={props.source}
          className="projects-main-image"
          alt="Picture of a project"
          onClick={onClick}
        ></img>
        <CSSTransition
          nodeRef={cssTransitionRef3}
          in={fullDisplay}
          timeout={0}
          classNames="projects-additional-images"
          unmountOnExit
        >
          <div
            ref={cssTransitionRef3}
            className="projects-additional-images-container"
          >
            <img
              src={props.source}
              onClick={onClick}
              className="projects-additional-images-base"
            ></img>
            <img
              src={props.source}
              onClick={onClick}
              className="projects-additional-images-base"
            ></img>
            <img
              src={props.source}
              onClick={onClick}
              className="projects-additional-images-base"
            ></img>
          </div>
        </CSSTransition>
      </div>

      <div className="projects-info">
        <h1 ref={cssTransitionRef2} className="projects-title">
          {props.title}
        </h1>

        <CSSTransition
          nodeRef={cssTransitionRef}
          in={fullDisplay}
          timeout={500}
          classNames="projects-description"
          unmountOnExit
        >
          <div ref={cssTransitionRef}>
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
