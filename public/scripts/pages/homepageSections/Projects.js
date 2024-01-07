import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { HOMEPAGE, PROJECT, CV } from "../../AppIndex.js";
import GithubImage from "../../../content/ico-github-96.png";
import TwitterImage from "../../../content/ico-twitter-250.png";
import WebImage from "../../../content/ico-web-100.png";

let lastSavedCoordinates = 0;

const ProjectLinkImages = function ({ github, webpage, twitter }) {
  return (
    <div className="projects-links">
      {github && (
        <a href={github}>
          <img src={GithubImage} className="link-image" alt="Github link"></img>
        </a>
      )}
      {twitter && (
        <a href={twitter}>
          <img
            src={TwitterImage}
            className="link-image"
            alt="Twitter or X link"></img>
        </a>
      )}
      {webpage && (
        <a href={webpage}>
          <img src={WebImage} className="link-image" alt="Webpage link"></img>
        </a>
      )}
    </div>
  );
};

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
      props.handleProjectClick(props.id);
    }, 500);
  };

  return (
    <div
      id={props.id}
      className={"projects-individual-project" + props.additionalCss}>
      <div className={"projects-image-container" + projectOverflowStyling()}>
        <img
          src={props.source}
          className="projects-main-image"
          alt="Picture of a project"
          onClick={onClick}></img>
        <CSSTransition
          nodeRef={cssTransitionRef3}
          in={fullDisplay}
          timeout={0}
          classNames="projects-additional-images"
          unmountOnExit>
          <div
            ref={cssTransitionRef3}
            className="projects-additional-images-container">
            <img
              src={props.source}
              onClick={onClick}
              className="projects-additional-images-base"></img>
            <img
              src={props.source}
              onClick={onClick}
              className="projects-additional-images-base"></img>
            <img
              src={props.source}
              onClick={onClick}
              className="projects-additional-images-base"></img>
          </div>
        </CSSTransition>
      </div>

      <div className="projects-info">
        <h1
          onClick={onClick}
          ref={cssTransitionRef2}
          className="projects-title">
          {props.title}
        </h1>

        <CSSTransition
          nodeRef={cssTransitionRef}
          in={fullDisplay}
          timeout={500}
          className="projects-description"
          unmountOnExit>
          <div ref={cssTransitionRef}>
            <div className="projects-spacer"> </div>
            <h3 className="projects-description-text">{props.description}</h3>
            <ProjectLinkImages
              github={props.github}
              webpage={props.webpage}
              twitter={props.twitter}
            />
            <div className="projects-spacer"></div>

            <div className="projects-return-container">
              <img
                src={GithubImage}
                className="projects-return-image"
                onClick={onClick}></img>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};
