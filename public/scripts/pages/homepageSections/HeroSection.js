import React from "react";
import Corporateimage from "../../../content/Corporateimage.png";
const HeroSectionMessage = () => {
  const heroSectionStringMessage = "";
  const heroSString1 = "DÉVELOPPEUR";
  const heroSString1_5 = "PAR PASSION ";
  const heroSString2 = " <JE SUIS À LA";
  const heroSString2_5 = "RECHERCHE D'UNE POSITION>";
  const heroSString3 = "DANS LE DÉVELOPPEMENT WEB";

  return (
    <div>
      <h1 className="hero-section-message-accent">{heroSString1}</h1>
      <div className="hero-section-message-wrap">
        <h1 className="hero-section-message-accent">{heroSString1_5}</h1>
        <h1 className="hero-section-message-italic">{heroSString2}</h1>
        <h1 className="hero-section-message-italic">{heroSString2_5}</h1>
      </div>
      <h1 className="hero-section-message-accent">{heroSString3}</h1>
    </div>
  );
};

const HeroSectionImage = () => {
  return (
    <div className="hero-section-picture">
      <img
        src={Corporateimage}
        className="hero-section-image"
        alt="Picture of Jonathan"
      ></img>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-message-container">
        <HeroSectionMessage />
      </div>
      <HeroSectionImage />
    </div>
  );
};

export default HeroSection;
