import React, { useEffect, useState } from "react";
import Corporateimage from "../../../content/Corporateimage.png";

export const HeroSectionMessage = () => {
  const heroSectionStringMessage = "";
  const heroSString1 = "DÉVELOPPEUR";
  const heroSString1_5 = "PAR PASSION ";
  const heroSString2 = " <JE SUIS À LA";
  const heroSString2_5 = "RECHERCHE D'UNE POSITION>";
  const heroSString3 = "DANS LE DÉVELOPPEMENT WEB";

  return (
    <div>
      {/* <h1 className="hero-section-message-accent">{heroSString1}</h1>
      <div className="hero-section-message-wrap">
        <h1 className="hero-section-message-accent">{heroSString1_5}</h1>
        <h1 className="hero-section-message-italic">{heroSString2}</h1>
        <h1 className="hero-section-message-italic">{heroSString2_5}</h1>
      </div>
      <h1 className="hero-section-message-accent">{heroSString3}</h1> */}
    </div>
  );
};

export const HeroSectionImage = ({ fadeAway }) => {
  const [fadeImage, setFadeImage] = useState(false);

  useEffect(() => {
    if (fadeAway && !fadeImage) setFadeImage(true);
    if (!fadeAway && fadeImage) setFadeImage(false);
  }, [fadeAway]);

  const styling = fadeImage
    ? "hero-section-image fade-away"
    : "hero-section-image";
  return (
    <div className="hero-section-picture">
      <img
        src={Corporateimage}
        className={styling}
        alt="Picture of Jonathan"
      ></img>
    </div>
  );
};
