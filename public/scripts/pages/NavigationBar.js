import React from "react";
import { Link, NavLink } from "react-router-dom";

const menu_styling = ({ isActive }) =>
  isActive ? "navbar-links-active" : "navbar-links-inactive";

const onHamburgerClick = function () {
  const navElements = document.querySelectorAll(".navbar-visible");
  navElements.forEach((navElement) => {
    navElement.classList.contains("disappear")
      ? navElement.classList.remove("disappear")
      : navElement.classList.add("disappear");
  });
};

class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="navbar-container">
        <div className="navbar-side-info navbar-visible">
          CODE + DESIGN JONATHAN ATGER - 2023
        </div>
        <div className="navbar-menu">
          <ul className="navbar-visible">
            <li>
              <NavLink to="/" className={menu_styling}>
                PROJETS
              </NavLink>
            </li>

            <li>
              <NavLink to="/info" className={menu_styling}>
                À PROPOS
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={menu_styling} exact="true">
                CONTACT
              </NavLink>
            </li>

            <li>
              <NavLink to="/cv" className={menu_styling} exact="true">
                C.V.
              </NavLink>
            </li>
          </ul>
          <a className="hamburger" onClick={onHamburgerClick}>
            <div></div>
            <div></div>
            <div></div>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
