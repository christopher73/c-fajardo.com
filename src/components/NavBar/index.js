import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../DarkMode/darkMode.css";
// import DarkMode from '../DarkMode/DarkMode';
import Octicon, { Grabber } from "@primer/octicons-react";
import ThemeContext from "../DarkMode/ThemeContext";

function ScrollToTopOnMount() {
  useEffect(() => window.scrollTo(0, 0));
  return null;
}
function NavBar(props) {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeStyle = {
    dark: { backgroundColor: "#121317", color: "#f2f2f2" },
    light: { backgroundColor: "white", color: "#292c35" },
  };
  return (
    <React.Fragment>
      <ScrollToTopOnMount />
      <header>
        <nav
          className="navbar navbar-expand-lg fixed-top shadow-lg"
          style={darkMode ? darkModeStyle.dark : darkModeStyle.light}
        >
          <div className="container">
            <Link style={{ color: "#403336" }} className="navbar-brand" to="/">
              <img alt="logo" src="./favicon.ico"></img>
            </Link>
            <div className="ml-auto ">
              {/* <DarkMode /> */}
              <label className="switch">
                <input
                  onClick={() => {
                    darkMode ? setDarkMode(false) : setDarkMode(true);
                    console.log(`its's dark now `);
                  }}
                  type="checkbox"
                />
                <span className="slider round"></span>
              </label>
            </div>
            <button
              style={{ background: "black" }}
              className="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <Octicon className="text-white" size="medium" icon={Grabber} />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ flexGrow: "0" }}
            >
              <ul className="navbar-nav ">
                <Link
                  style={{ color: "#027373" }}
                  className="btn btn-link"
                  to="/projects"
                >
                  Projects
                </Link>
                <Link
                  style={{ color: "#027373" }}
                  className="btn btn-link"
                  to="/projects"
                >
                  Blog
                </Link>
                <Link
                  style={{ color: "#027373" }}
                  className="btn btn-link"
                  to="/technologies"
                >
                  Technologies
                </Link>
                <Link
                  style={
                    darkMode
                      ? { backgroundColor: "#bfa615", color: "black" }
                      : darkModeStyle.dark
                  }
                  className="btn shadow text-uppercase shadow-lg font-weight-bold"
                  to="/contactme"
                >
                  Contact me
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <ThemeContext.Provider
        value={darkMode ? darkModeStyle.dark : darkModeStyle.light}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            ...(darkMode ? darkModeStyle.dark : darkModeStyle.light),
          }}
        >
          <div style={{ height: "50px" }}></div>
          {props.children}
        </div>
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

export default NavBar;
