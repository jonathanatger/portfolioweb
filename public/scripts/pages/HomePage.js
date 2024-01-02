import React, { useState, useEffect } from "react";
import {
  HeroSectionMessage,
  HeroSectionImage,
} from "./homepageSections/HeroSection.js";
import { ProjectDisplay } from "./homepageSections/Projects.js";
import { Curtain, ContactInfo } from "./homepageSections/Contact.js";
import { projects } from "./homepageSections/ProjectsInfo.js";

export const [HOMEPAGE, PROJECT, CV] = ["home", "project", "cv"];

export const Homepage = function ({
  scrollPosition,
  scrollDirection,
  setScrollDirection,
}) {
  const [informationDisplayed, setInformationDisplayed] = useState(HOMEPAGE);
  const [displayedProjectId, setDisplayedProjectId] = useState(null);
  const [fadeHeroSection, setFadeHeroSection] = useState(true);

  const disappearingElementsStyling = function () {
    if (informationDisplayed === HOMEPAGE)
      return " homepage-disappear-transition";
    if (informationDisplayed === PROJECT || informationDisplayed === CV)
      return " homepage-disappear";
    return "";
  };

  if (informationDisplayed === HOMEPAGE) {
    document.body.style.overflow = "auto";
  } else if (informationDisplayed === PROJECT) {
    document.body.style.overflow = "hidden";
  }

  const handleProjectClick = (id) => {
    if (informationDisplayed === HOMEPAGE) {
      setInformationDisplayed(() => {
        setDisplayedProjectId(id);
        return PROJECT;
      });

      setTimeout(() => {
        setScrollDirection("DOWN");
      }, 100);
    } else if (informationDisplayed === PROJECT) {
      setInformationDisplayed(() => {
        setDisplayedProjectId(null);
        return HOMEPAGE;
      });
    }
  };

  useEffect(() => {
    let fadeAway = scrollPosition > 250 ? true : false;
    if (fadeAway && !fadeHeroSection) setFadeHeroSection(true);
    if (!fadeAway && fadeHeroSection) setFadeHeroSection(false);
  }, [scrollPosition]);

  return (
    <div id="main-grid" className="homepage-main-grid">
      <div className={"hero-section" + disappearingElementsStyling()}>
        <div className="hero-section-message-container bg-white">
          <HeroSectionMessage fadeHeroSection={fadeHeroSection} />
        </div>
        <HeroSectionImage fadeHeroSection={fadeHeroSection} />
      </div>
      <div className="grid-filler"></div>
      <div id="projects-main-container" className="projects-main-container">
        <h1 className={"projects-main-title" + disappearingElementsStyling()}>
          ./PROJETS
        </h1>
        {projects.map((project, i) => {
          return (
            <ProjectDisplay
              key={project.key}
              id={project.key}
              source={project.srcImage}
              onClickSetHomepageDisplay={(e) => {
                handleProjectClick(e);
              }}
              title={project.title}
              description={project.description}
              additionalCss={
                project.key === displayedProjectId
                  ? " disappear-transition"
                  : disappearingElementsStyling()
              }
              scrollPosition={scrollPosition}
              informationDisplayed={informationDisplayed}
              displayedProjectId={displayedProjectId}
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
