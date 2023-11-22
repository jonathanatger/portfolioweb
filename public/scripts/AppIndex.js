import { createRoot } from "react-dom/client";
import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage.js";
import NavigationBar from "./pages/NavigationBar.js";
import _debounce from "lodash/debounce";
import "../css/general.css";

const App = () => {
  const [scrollDirection, setScrollDirection] = useState("UP");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollDirection = () => {
    setScrollPosition((prevScrollPosition) => {
      if (window.scrollY > prevScrollPosition) {
        setScrollDirection("DOWN");
      } else {
        setScrollDirection("UP");
      }
      return window.scrollY;
    });
  };

  const debounceHandleScrollDirection = _debounce(handleScrollDirection, 50);

  useEffect(() => {
    window.addEventListener("scroll", debounceHandleScrollDirection);

    return () => {
      window.removeEventListener("scroll", debounceHandleScrollDirection);
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
