import React, { useContext, useState, useEffect } from "react";
import ThemeContext from "../../components/DarkMode/ThemeContext";
import { Link as Linko } from "react-router-dom";
import ProjectList from "../../components/ProjectList";
import { allProjects, typedStrings } from "../../data/constants";
import TypedString from "../../components/Typed";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
// import SlideShow from "../../components/SlideShow/SlideShow";
import ScrollUp from "../../components/ScrollUp/ScrollUp";
import "./style.css";
import video from "../../assets/changes.mp4";
const shortid = require("shortid");

const projectDivs = allProjects.map(function (elem, i) {
  console.log(i);
  if (elem.isFeatured === true) {
    return (
      <ProjectList
        className="container"
        project={elem}
        key={shortid.generate()}
      />
    );
  } else return null;
});
const Div = (
  <div className="container ">
    <div className="row fade-in ">
      <div className="col-md-12 col-sm-12 m-auto text-left ">
        <p className="lead"></p>
        <h3 id="intro" className="font-weight-light mt-md-1 mt-4 pt-md-0 pt-5">
          <span>I’m Chris</span>
          <br />
          <span> full-stack developer 🤓</span>
          <br />
          <span>NYC 🙏 🗽</span>
          <br />
          <span> Javascript 💻</span>
          <br />
          <TypedString strings={typedStrings} />
        </h3>
        <Linko
          to="/contactme"
          className="btn btn-lg my-3 shadow-lg btn-lets-talk"
        >
          Let's talk
        </Linko>
        <div className="my-3">
          <SocialMedia />
        </div>
      </div>
      {/* <div className="col-md-7 col-sm-12 ">
      <SlideShow />
    </div> */}
    </div>
  </div>
);
function Landing() {
  const [showDiv, setShowDiv] = useState(
    localStorage.getItem("showDiv") || false
  );
  const theme = useContext(ThemeContext);
  const stylo = {
    fontFamily: "Noto Sans JP",
    ...theme,
  };
  useEffect(() => {
    if (showDiv) {
      document.body.style.overflow = "unset";
      //
    } else {
      document.body.style.overflow = "hidden";
    }
  });
  return (
    <div style={stylo}>
      <ScrollUp />
      <video
        autoPlay
        muted
        onEnded={() => {
          localStorage.setItem("showDiv", true);
          setShowDiv(true);
        }}
        className="video"
      >
        <source src={video} type="video/mp4" />
      </video>
      {console.log(stylo)}
      <div
        className="d-flex flex-column justify-content-md-center "
        style={{ minHeight: "100vh" }}
      >
        {showDiv ? Div : null}
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-md-12 ">
            <h2 style={{ fontWeight: "bold" }}>Featured Projects</h2>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12">{projectDivs}</div>
        </div>
        <div className="row ">
          <div className="col-md-12">
            <Linko
              id="button"
              style={{
                backgroundColor: "#F2D57E",
                color: "#8C4A7B",
              }}
              className="btn"
              to="/projects"
            >
              Go to all projects
            </Linko>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
