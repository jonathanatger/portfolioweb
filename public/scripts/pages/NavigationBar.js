import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const menuStyling = ({ isActive }) =>
  isActive ? "navbar-links-active" : "navbar-links-inactive";

const onHamburgerClick = function () {
  const navElements = document.querySelectorAll(".navbar-visible");
  navElements.forEach((navElement) => {
    navElement.classList.contains("disappear")
      ? navElement.classList.remove("disappear")
      : navElement.classList.add("disappear");
  });
};

const sectionSign = "=> PARIS";

import React, { useState, useEffect } from "react";

const NavigationBar = function () {
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
            <NavLink to="/" className={menuStyling}>
              PROJETS
            </NavLink>
          </li>

          <li>
            <NavLink to="/info" className={menuStyling}>
              À PROPOS
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={menuStyling} exact="true">
              CONTACT
            </NavLink>
          </li>

          <li>
            <NavLink to="/cv" className={menuStyling} exact="true">
              C.V.
            </NavLink>
          </li>
        </ul>
        <a id="hamburger" className="hamburger" onClick={onHamburgerClick}>
          <div></div>
          <div></div>
          <div></div>
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
