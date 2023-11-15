import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cv from "./pages/Cv.js";
import HomePage from "./pages/HomePage.js";
import NavigationBar from "./pages/NavigationBar.js";
import "../css/general.css";

//Render App : higher order component is the browser router
//Create a Router in React to handle changes

const domNode = document.getElementById("#root");

const root = createRoot(domNode);

root.render(
  <div>
    <BrowserRouter>
      <NavigationBar />
      <div style={{ top: 0 }}>
        <Routes>
          <Route exact path="/cv" element={<Cv />} />
          <Route exact path="/st" element={<HomePage st="13241" />} />
          <Route path="/" element={<HomePage st="1" />} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
);
