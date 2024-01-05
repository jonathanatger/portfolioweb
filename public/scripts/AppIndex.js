import { createRoot } from "react-dom/client";
import React, { useState, useEffect } from "react";
import { Homepage } from "./pages/HomePage.js";
import NavigationBar from "./pages/NavigationBar.js";
import _debounce from "lodash/debounce";
import "../css/general.css";
import { Cv } from "./pages/Cv.js";

export const [HOMEPAGE, PROJECT, CONTACT, CV] = [
  "home",
  "project",
  "contact",
  "cv",
];

const App = () => {
  const [scrollDirection, setScrollDirection] = useState("UP");
  const [scrollPosition, setScrollPosition] = useState(
    localStorage.getItem("scrollpos") ? localStorage.getItem("scrollpos") : 0
  );
  const [fadeHeroSection, setFadeHeroSection] = useState(true);
  const [informationDisplayed, setInformationDisplayed] = useState(HOMEPAGE);
  const [displayedProjectId, setDisplayedProjectId] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPosition);
    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []);

  const handleScrollPosition = () => {
    setScrollPosition((prevScrollPosition) => {
      debounceHandleScrollDirection(prevScrollPosition, window.scrollY);
      return window.scrollY;
    });
  };

  const handleScrollDirection = (prevScrollPosition, newScrollPosition) => {
    if (newScrollPosition > prevScrollPosition && scrollDirection == "UP") {
      setScrollDirection("DOWN");
    } else {
      setScrollDirection("UP");
    }
  };

  const debounceHandleScrollDirection = _debounce(handleScrollDirection, 20);

  useEffect(() => {
    let threshold = window.screen.width > 600 ? 250 : 0;
    let fadeAway = scrollPosition > threshold ? true : false;
    if (fadeAway && !fadeHeroSection) setFadeHeroSection(true);
    if (!fadeAway && fadeHeroSection) setFadeHeroSection(false);
  }, [scrollPosition]);

  return (
    <div>
      <NavigationBar
        scrollDirection={scrollDirection}
        scrollPosition={scrollPosition}
        fadeHeroSection={fadeHeroSection}
        setInformationDisplayed={setInformationDisplayed}
      />

      <div>
        {informationDisplayed === HOMEPAGE ||
        informationDisplayed === PROJECT ? (
          <Homepage
            scrollDirection={scrollDirection}
            scrollPosition={scrollPosition}
            setScrollDirection={setScrollDirection}
            fadeHeroSection={fadeHeroSection}
            informationDisplayed={informationDisplayed}
            setInformationDisplayed={setInformationDisplayed}
            displayedProjectId={displayedProjectId}
            setDisplayedProjectId={setDisplayedProjectId}
          />
        ) : (
          <Cv />
        )}
      </div>
    </div>
  );
};

// store windowPosition to prevent the behavior of window.scrollY === 0 on reload
window.onbeforeunload = function (e) {
  localStorage.setItem("scrollpos", window.scrollY);
};

const domNode = document.getElementById("#root");

const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
