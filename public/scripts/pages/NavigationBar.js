import React, { useEffect, useState } from "react";

const sectionSign = "=> PARIS";

const NavigationBar = function ({ scrollDirection, scrollPosition }) {
  const [visibility, setVisibility] = useState(true);
  const [isMoving, setIsMoving] = useState(false);

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

  return (
    <nav className="navbar-container">
      <div className="navbar-side-info ">
        <div className="navbar-side-info-top navbar-visible">{sectionSign}</div>
        <div className="navbar-side-info-side navbar-visible">
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
