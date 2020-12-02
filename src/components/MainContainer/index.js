import React, { useState } from "react";
import "../DarkMode/darkMode.css";
import ThemeContext from "../DarkMode/ThemeContext";
import "./style.css";
import SideBar from "./SideBar";

export default function MainContainer(props) {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeStyle = {
    dark: { backgroundColor: "#121317", color: "#f2f2f2" },
    light: { backgroundColor: "#fff", color: "#292c35" },
  };
  return (
    <ThemeContext.Provider
      value={darkMode ? darkModeStyle.dark : darkModeStyle.light}
    >
      <div className="main-container">
        <SideBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div>{props.children}</div>
      </div>
    </ThemeContext.Provider>
  );
}
