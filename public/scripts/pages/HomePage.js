import React, { useEffect, useState } from "react";
import {
  HeroSectionMessage,
  HeroSectionImage,
} from "./homepageSections/HeroSection.js";
import { ProjectImage, ProjectTitle } from "./homepageSections/Projects.js";
import { Curtain, ContactInfo } from "./homepageSections/Contact.js";
import projectsRaw from "./homepageSections/project.json";

const projects = Object.entries(projectsRaw);
const [HOMEPAGE, PROJECT, CV] = ["home", "project", "cv"];

const Homepage = function (props) {
  const [informationDisplayed, setInformationDisplayed] = useState(HOMEPAGE);

  const handleProjectClick = () => {
    let mainGrid = document.querySelector(".homepage-main-grid");
    mainGrid.classList.add("disappeared");
    console.log("clicked");
  };

  return (
    <div id="main-grid" className="homepage-main-grid">
      <div className="hero-section">
        <div className="hero-section-message-container">
          <HeroSectionMessage />
        </div>
        <HeroSectionImage />
      </div>

      <div className="grid-filler"></div>

      <div className="projects-main-container">
        <div className="projects-pictures-container">
          {
            // RERENDERING EVERY TIME I MOVE
            projects.map((element, i) => {
              return (
                <ProjectImage
                  key={i.toString()}
                  source={element[1].srcImage}
                  onClick={handleProjectClick}
                />
              );
            })
          }
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
