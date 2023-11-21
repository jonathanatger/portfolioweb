import { createRoot } from "react-dom/client";
import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage.js";
import NavigationBar from "./pages/NavigationBar.js";
import "../css/general.css";

const App = () => {
  const [scrollDirection, setScrollDirection] = useState("none");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollDirection = () => {
    window.scrollY > scrollPosition
      ? setScrollDirection("DOWN")
      : setScrollDirection("UP");

    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDirection);

    return () => {
      window.removeEventListener("scroll", handleScrollDirection);
    };
  }, [scrollPosition]);

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
