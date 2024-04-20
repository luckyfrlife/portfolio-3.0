import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <sectin className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>

      <Works />
    </sectin>
  );
};

export default Work;
