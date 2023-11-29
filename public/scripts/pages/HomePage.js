import React, { useEffect, useState } from "react";
import {
  HeroSectionMessage,
  HeroSectionImage,
} from "./homepageSections/HeroSection.js";
import { ProjectDisplay } from "./homepageSections/Projects.js";
import { Curtain, ContactInfo } from "./homepageSections/Contact.js";
import { projects } from "./homepageSections/ProjectsInfo.js";

const [HOMEPAGE, PROJECT, CV] = ["home", "project", "cv"];

const Homepage = function ({ scrollPosition, scrollDirection }) {
  const [informationDisplayed, setInformationDisplayed] = useState(HOMEPAGE);
  const [displayedProjectId, setDisplayedProjectId] = useState(null);

  const disappearingElementsStyling = function () {
    if (informationDisplayed === HOMEPAGE) return " disappear-transition";
    if (informationDisplayed === PROJECT) return " disappear";
  };

  const handleProjectClick = (id) => {
    if (informationDisplayed === HOMEPAGE) {
      setInformationDisplayed(() => {
        setDisplayedProjectId(id);
        return PROJECT;
      });
    } else if (informationDisplayed === PROJECT) {
      setInformationDisplayed(HOMEPAGE);
    }
  };

  return (
    <div id="main-grid" className="homepage-main-grid">
      {" "}
      <div className={"hero-section" + disappearingElementsStyling()}>
        <div className="hero-section-message-container">
          <HeroSectionMessage />
        </div>
        <HeroSectionImage scrollPosition={scrollPosition} />
      </div>
      <div className="grid-filler"></div>
      <div className="projects-main-container">
        {projects.map((project, i) => {
          return (
            <ProjectDisplay
              key={project.key}
              id={project.key}
              source={project.srcImage}
              onClick={(e) => {
                handleProjectClick(e);
              }}
              title={project.title}
              description={project.description}
              additionalCss={
                project.key === displayedProjectId
                  ? " disappear-transition"
                  : disappearingElementsStyling()
              }
            />
          );
        })}
      </div>
      <div className="grid-filler"></div>
      <div className={"contact-main-container" + disappearingElementsStyling()}>
        <Curtain />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Homepage;
