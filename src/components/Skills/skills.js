import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Developing User Interfaces can create interactive and responsive user
        interfaces for web applications using React, a popular JavaScript
        library for building front-end components
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              User Interface (UI) and User Experience (UX) design are critical
              components of creating effective and user-friendly digital
              products
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              Website design involves creating and structuring web pages to
              present content and provide a positive user experience
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web-App</h2>
            <p>
              A web application web app is a software application that runs in a
              web browser, offering a variety of functions and services over the
              internetA web application web app is a software application that
              runs in a web browser, offering a variety of functions and
              services over the internet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
