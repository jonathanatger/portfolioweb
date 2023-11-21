import React, { useEffect, useState } from "react";

const sectionSign = "=> PARIS";

const NavigationBar = function ({ scrollDirection, scrollPosition }) {
  const [visibility, setVisibility] = useState(true);

  const changeNavbarVisibility = () => {
    const navElements = document.querySelectorAll(".navbar-visible");

    navElements.forEach((navElement) => {
      if (visibility === false) {
        navElement.classList.remove("disappear");
        setVisibility(true);
      } else {
        navElement.classList.add("disappear");
        setVisibility(false);
      }
    });
  };

  useEffect(() => {
    if (scrollDirection == "DOWN" && visibility === true)
      changeNavbarVisibility();
    if (scrollDirection == "UP" && visibility === false)
      changeNavbarVisibility();
  }, [scrollDirection]);

  return (
    <nav className="navbar-container">
      <div className="navbar-side-info navbar-visible">
        <div className="navbar-side-info-top">{sectionSign}</div>
        <div className="navbar-side-info-side">
          CODE + DESIGN JONATHAN ATGER - 2023
        </div>
      </div>
      <div className="navbar-menu navbar-visible">
        <ul className="navbar-visible">
          <li>
            <a className="navbar-links-active">PROJETS</a>
          </li>

          <li>
            <a className="navbar-links-active">À PROPOS</a>
          </li>

          <li>
            <a className="navbar-links-active">CONTACT</a>
          </li>

          <li>
            <a className="navbar-links-active">C.V.</a>
          </li>
        </ul>
        <a
          id="hamburger"
          className="hamburger"
          onClick={() => {
            changeNavbarVisibility();
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
