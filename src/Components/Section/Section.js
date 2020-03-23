import React from "react";
import SideImage from "../../assets/images/index-cover.png";
const Section = () => {
  return (
    <div>
      <section className="left-section">
        <img src={SideImage} alt="" />
        <div className="header-cover">
          <p>Book is a window to the world</p>
        </div>
        <div className="footer-cover">
          <p>Photo by Mark Pan4ratte on Unsplash</p>
        </div>
        <div className="overlay-bg"></div>
      </section>
    </div>
  );
};

export default Section;
