import React, { useEffect, useState } from "react";
import {
  HeroSectionMessage,
  HeroSectionImage,
} from "./homepageSections/HeroSection.js";
import { ProjectImage, ProjectTitle } from "./homepageSections/Projects.js";
import { Curtain, ContactInfo } from "./homepageSections/Contact.js";
import BlogImage from "../../content/CaptureOB.png";

const Homepage = function (props) {
  const [scrollPosition, setScrollPosition] = useState();

  useEffect(() => {
    if (scrollPosition > 300) console.log("lol");
  }, [scrollPosition]);

  return (
    <div className="homepage-main-grid">
      <div className="hero-section">
        <div className="hero-section-message-container">
          <HeroSectionMessage />
        </div>
        <HeroSectionImage />
      </div>

      <div className="grid-filler"></div>

      <div className="projects-main-container">
        <div className="projects-pictures-container">
          <ProjectImage source={BlogImage} />
          <ProjectImage source={BlogImage} />
          <ProjectImage source={BlogImage} />
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
