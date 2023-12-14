import { createRoot } from "react-dom/client";
import React, { useState, useEffect, createContext, useContext } from "react";
import HomePage from "./pages/HomePage.js";
import NavigationBar from "./pages/NavigationBar.js";
import _debounce from "lodash/debounce";
import "../css/general.css";
import Lenis from "@studio-freight/lenis";

const App = () => {
  const [scrollDirection, setScrollDirection] = useState("UP");
  const [scrollPosition, setScrollPosition] = useState(
    localStorage.getItem("scrollpos") ? localStorage.getItem("scrollpos") : 0
  );

  const handleScrollDirection = (prevScrollPosition, newScrollPosition) => {
    if (newScrollPosition > prevScrollPosition && scrollDirection == "UP") {
      setScrollDirection("DOWN");
    } else {
      setScrollDirection("UP");
    }
  };

  const debounceHandleScrollDirection = _debounce(handleScrollDirection, 20);

  const handleScrollPosition = () => {
    setScrollPosition((prevScrollPosition) => {
      debounceHandleScrollDirection(prevScrollPosition, window.scrollY);
      return window.scrollY;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPosition);
    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []);

  return (
    <div>
      <NavigationBar
        scrollDirection={scrollDirection}
        scrollPosition={scrollPosition}
      />

      <div>
        <HomePage
          scrollDirection={scrollDirection}
          scrollPosition={scrollPosition}
        />
      </div>
    </div>
  );
};

// store windowPosition to prevent the behavior of window.scrollY === 0 on reload
window.onbeforeunload = function (e) {
  localStorage.setItem("scrollpos", window.scrollY);
};

// smooth scroll behavior library
export const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const domNode = document.getElementById("#root");

const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
