import { createRoot } from "react-dom/client";
import React, { useState, useEffect, createContext, useContext } from "react";
import HomePage from "./pages/HomePage.js";
import NavigationBar from "./pages/NavigationBar.js";
import _debounce from "lodash/debounce";
import "../css/general.css";

// to reference an object of the DOM we are creating :
// const myBtn = useRef(null); initializes with null value
// return (<button ref={myBtn}></button>); we reference the button likeso
// const clickit = () => myBtn.current.click(); we can now use the reference in functions (don't forget 'current')
// ------------------ to test useRef

// To set a value from anywhere in the app
// const lights = { happy: 0, sad: 1 };
// const lightingMode = createContext(lights);
// ------------- to test out

let scrollPosition = 0;

// const handleScrollPosition = () => {
//   // debounceHandleScrollDirection(scrollPosition, window.scrollY);
//   scrollPosition = window.scrollY;
// };
// window.addEventListener("scroll", handleScrollPosition);
// const ScrollPositionContext = createContext(scrollPosition);

const App = () => {
  const [scrollDirection, setScrollDirection] = useState("UP");

  //WIP ----------------------------------
  // let scrollP = useContext(ScrollPositionContext);

  // useEffect(() => {
  //   console.log("useEffect triggered by scrollP");
  // }, [scrollP]);

  const handleScrollPosition = () => {
    debounceHandleScrollDirection(scrollPosition, window.scrollY);
    scrollPosition = window.scrollY;
  };

  const handleScrollDirection = (prevScrollPosition, newScrollPosition) => {
    if (newScrollPosition > prevScrollPosition && scrollDirection == "UP") {
      setScrollDirection("DOWN");
    } else {
      setScrollDirection("UP");
    }
  };
  const debounceHandleScrollDirection = _debounce(handleScrollDirection, 300);

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
