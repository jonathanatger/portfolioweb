import React from "react";
import HeroSection from "./homepageSections/HeroSection.js";
import Projects from "./homepageSections/Projects.js";
import Contact from "./homepageSections/Contact.js";
class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage-main-grid">
        <HeroSection />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default HomePage;
