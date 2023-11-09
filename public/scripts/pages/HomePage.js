import React from "react";
import HeroSection from "./homepageSections/HeroSection.js";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage-main-grid">
        <HeroSection />
      </div>
    );
  }
}

export default HomePage;
