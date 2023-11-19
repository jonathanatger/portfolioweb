import { createRoot } from "react-dom/client";
import React, { useState, useEffect } from "react";

import HomePage from "./pages/HomePage.js";
import NavigationBar from "./pages/NavigationBar.js";
import "../css/general.css";

let timeoutId;
let scrollPosition;

const App = () => {
  const [scrollDirection, setScrollDirection] = useState();

  const handleScrollDirection = () => {
    if (timeoutId) clearTimeout(timeoutId);

    scrollPosition && window.scrollY >= scrollPosition
      ? setScrollDirection("DOWN")
      : setScrollDirection("UP");

    timeoutId = setTimeout(() => {
      scrollPosition = window.scrollY;
    }, 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScrollDirection();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        handleScrollDirection();
      });
    };
  }, []);

  return (
    <div>
      <NavigationBar
        scrollDirection={scrollDirection}
        scrollPosition={scrollPosition}
      />
      <div style={{ top: 0 }}>
        <HomePage
          scrollDirection={scrollDirection}
          scrollPosition={scrollPosition}
        />
      </div>
    </div>
  );
};

const domNode = document.getElementById("#root");

const root = createRoot(domNode);

root.render(<App />);
