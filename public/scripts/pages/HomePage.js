import React from "react";
import HeroSection from "./homepageSections/HeroSection.js";
import Projects from "./homepageSections/Projects.js";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage-main-grid">
        <HeroSection />
        <Projects />
      </div>
    );
  }
}

export default HomePage;
