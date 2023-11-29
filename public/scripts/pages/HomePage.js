import React, { useEffect, useState } from "react";
import {
  HeroSectionMessage,
  HeroSectionImage,
} from "./homepageSections/HeroSection.js";
import { ProjectImage, ProjectTitle } from "./homepageSections/Projects.js";
import { Curtain, ContactInfo } from "./homepageSections/Contact.js";
import { projects } from "./homepageSections/ProjectsInfo.js";

const [HOMEPAGE, PROJECT, CV] = ["home", "project", "cv"];

const Homepage = function ({ scrollPosition, scrollDirection }) {
  const [informationDisplayed, setInformationDisplayed] = useState(HOMEPAGE);

  let fadeAway = scrollPosition > 300 ? true : false;

  const handleProjectClick = () => {
    let mainGrid = document.querySelector(".homepage-main-grid");
    if (informationDisplayed == HOMEPAGE) {
      mainGrid.classList.add("disappeared");
      setInformationDisplayed(PROJECT);
    } else if (informationDisplayed == PROJECT) {
      mainGrid.classList.remove("disappeared");
      setInformationDisplayed(HOMEPAGE);
    }
  };

  return (
    <div id="main-grid" className="homepage-main-grid">
      <div className="hero-section">
        <div className="hero-section-message-container">
          <HeroSectionMessage />
        </div>
        <HeroSectionImage fadeAway={fadeAway} />
      </div>

      <div className="grid-filler"></div>

      <div className="projects-main-container">
        <div className="projects-pictures-container">
          {projects.map((project, i) => {
            return (
              <ProjectImage
                // key={project.key}
                source={project.srcImage}
                onClick={handleProjectClick}
              />
            );
          })}
        </div>
        <div className="projects-info-container">
          <ProjectTitle title="Trier locaux avec le machine learning" />
        </div>
      </div>

      <div className="grid-filler"></div>

      <div className="contact-main-container">
        <Curtain />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Homepage;
