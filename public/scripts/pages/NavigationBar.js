import React from "react";
import "../../css/general.css";
import { Link, NavLink } from "react-router-dom";

class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="navbar-container">
        <div className="navbar-menu">
          <ul>
            <li>
              <NavLink
                to="/projets"
                className={({ isActive }) =>
                  isActive ? "navbar-links-active" : "navbar-links-inactive"
                }
              >
                PROJETS
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/info"
                className={({ isActive }) =>
                  isActive ? "navbar-links-active" : "navbar-links-inactive"
                }
              >
                À PROPOS
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "navbar-links-active" : "navbar-links-inactive"
                }
                exact="true"
              >
                CONTACT
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cv"
                className={({ isActive }) =>
                  isActive ? "navbar-links-active" : "navbar-links-inactive"
                }
                exact="true"
              >
                C.V.
              </NavLink>
            </li>
          </ul>
          <a className="hamburger">
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
