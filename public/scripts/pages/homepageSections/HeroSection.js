import React from "react";
import Corporateimage from "../../../content/Corporateimage.png";

const HeroSectionMessage = () => {
  const heroSectionStringMessage =
    "DÉVELOPPEUR PAR PASSION <JE SUIS À LA RECHERCHE D'UN EMPLOI> DANS LE DÉVELOPPEMENT WEB";

  return <h1>{heroSectionStringMessage}</h1>;
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
