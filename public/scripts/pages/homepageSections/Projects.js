import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { lenis } from "../../AppIndex";

let lastSavedCoordinates = 0;

export const ProjectDisplay = function (props) {
  const [fullDisplay, setFullDisplay] = useState(false);
  const [scrollingLimits, setScrollingLimits] = useState({
    top: 0,
    bottom: 3000,
  });

  const cssTransitionRef = useRef(null);
  const cssTransitionRef2 = useRef(null);
  const cssTransitionRef3 = useRef(null);

  const onClick = function () {
    props.onClickSetHomepageDisplay(props.id);

    if (!fullDisplay) {
      lastSavedCoordinates = window.scrollY;
      // lenis.stop();
      window.scrollTo(0, document.getElementById(props.id).offsetTop);

      // lenis.start();
      // lenis.destroy();
      setTimeout(() => {
        document.getElementById(props.id).classList.add("overscroll");
      }, 400);
    } else {
      document.getElementById(props.id).classList.remove("overscroll");
      // lenis.stop();
      window.scrollTo(0, lastSavedCoordinates);
      // lenis.start();
    }
    setFullDisplay(!fullDisplay);
  };

  return (
    <div
      id={props.id}
      className={"projects-individual-project" + props.additionalCss}
    >
      <div className="projects-image-container">
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
