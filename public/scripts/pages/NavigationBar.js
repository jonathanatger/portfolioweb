import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const menuStyling = ({ isActive }) =>
  isActive ? "navbar-links-active" : "navbar-links-inactive";

const sectionSign = "=> PARIS";

const NavigationBar = function ({ scrollDirection, scrollPosition }) {
  let visibility = 1;

  const changeNavbarVisibility = function (controller) {
    const navElements = document.querySelectorAll(".navbar-visible");
    navElements.forEach((navElement) => {
      if (controller === 1) {
        navElement.classList.remove("disappear");
        visibility = 1;
      } else {
        navElement.classList.add("disappear");
        visibility = 0;
      }
    });
  };

  useEffect(() => {
    if (scrollDirection == "DOWN") changeNavbarVisibility(0);
    else changeNavbarVisibility(1);
  }, [scrollDirection]);

  return (
    <nav className="navbar-container">
      <div className="navbar-side-info navbar-visible">
        <div className="navbar-side-info-top">{sectionSign}</div>
        <div className="navbar-side-info-side">
          CODE + DESIGN JONATHAN ATGER - 2023
        </div>
      </div>
      <div className="navbar-menu">
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
          onClick={changeNavbarVisibility(visibility === 0 ? 1 : 0)}
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
