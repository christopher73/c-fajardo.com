import React from "react";
import Octicon, { Grabber } from "@primer/octicons-react";
import { Link } from "react-router-dom";
import Links from "./Links";
import { allProjects, typedStrings } from "../../data/constants";
import TypedString from "../../components/Typed";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import chris from "../../assets/chris.jpeg";
export default function SideBar({ darkMode, setDarkMode }) {
  const darkModeStyle = {
    dark: { backgroundColor: "#121317", color: "#f2f2f2" },
    light: { backgroundColor: "white", color: "#292c35" },
  };
  return (
    <div
      className='side-bar-container fade-in'
      style={darkMode ? darkModeStyle.dark : darkModeStyle.light}
    >
      <div className='side-bar'>
        <div className='my-3 logo-div'>
          <Link to='/'>
            <img alt='logo' src='./favicon.ico' />
          </Link>
          <label className='switch'>
            <input onClick={() => setDarkMode((s) => !s)} type='checkbox' />
            <span className='slider round'></span>
          </label>
        </div>
        <div>
          <img
            src={chris}
            alt='Christopher Fajardo'
            className='side-bar-image'
          ></img>
        </div>
        <div className='side-bar-text'>
          <h1>I’m Chris </h1>
          <h1>
            full-stack DEv{" "}
            <span role='img' aria-label='emoji'>
              🤓💻
            </span>
          </h1>
          <h1>
            NYC{" "}
            <span role='img' aria-label='emoji'>
              🙏🗽
            </span>
            <br />
          </h1>
        </div>
        <Links />
        <SocialMedia />
        <TypedString />
      </div>
    </div>
  );
}
