import React, { useEffect, useState } from "react";
import { HOMEPAGE, PROJECT, CONTACT, CV } from "../AppIndex";

const MenuItem = function ({ linkName, target, setInformationDisplayed }) {
  let informationDisplayed;
  let elementToScrollTo;

  switch (target) {
    case PROJECT:
      informationDisplayed = HOMEPAGE;
      elementToScrollTo = "#projects-main-title";
      break;
    case CONTACT:
      informationDisplayed = HOMEPAGE;
      elementToScrollTo = "#contact-main-container";
      break;
    case CV:
      informationDisplayed = CV;
      elementToScrollTo = "#cv-main-container";
      break;
  }

  const onMenuClick = function () {
    setInformationDisplayed(informationDisplayed);
    setTimeout(() => {
      window.scrollTo(0, document.querySelector(elementToScrollTo).offsetTop);
    }, 100);
  };

  return (
    <li>
      <a onClick={onMenuClick} className="navbar-links-active">
        {linkName}
      </a>
    </li>
  );
};

const NavigationBar = function ({
  scrollDirection,
  scrollPosition,
  fadeHeroSection,
  setInformationDisplayed,
}) {
  const [visibility, setVisibility] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
  const [fadeSectionSign, setFadeSectionSign] = useState(false);

  useEffect(() => {
    if (fadeHeroSection) setFadeSectionSign(true);
    else setFadeSectionSign(false);
  }, [fadeHeroSection]);

  const sectionSign = "=> PARIS";

  useEffect(() => {
    if (isMoving == false) {
      setIsMoving(true);
    }
  }, [scrollPosition]);

  if (
    scrollDirection == "DOWN" &&
    visibility &&
    isMoving &&
    scrollPosition > 250
  )
    setVisibility(false);
  if (scrollDirection == "UP" && !visibility && isMoving) setVisibility(true);

  document.querySelectorAll(".navbar-visible").forEach((element) => {
    if (visibility) {
      element.classList.remove("disappear");
    } else {
      element.classList.add("disappear");
    }
  });

  const sectionSignStyling = function () {
    if (fadeSectionSign) return " hero-section-image-fade";
    return " hero-section-recover-fade";
  };

  return (
    <nav id="navbar-container" className="navbar-container">
      <div className="navbar-side-info ">
        <div
          className={
            "navbar-side-info-top navbar-visible" + sectionSignStyling()
          }
        >
          {sectionSign}
        </div>
        <div className="navbar-side-info-side navbar-visible">
          CODE + DESIGN JONATHAN ATGER - 2023
        </div>
      </div>
      <div className="navbar-menu navbar-visible">
        <ul className="navbar-visible">
          <MenuItem
            linkName="PROJETS"
            target={PROJECT}
            setInformationDisplayed={setInformationDisplayed}
          />
          <MenuItem
            linkName="CONTACT"
            target={CONTACT}
            setInformationDisplayed={setInformationDisplayed}
          />
          <MenuItem
            linkName="C.V."
            target={CV}
            setInformationDisplayed={setInformationDisplayed}
          />
        </ul>

        <a
          id="hamburger"
          className="hamburger"
          onClick={() => {
            setVisibility((prevVisibility) => {
              setIsMoving(false);

              return !prevVisibility;
            });
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
