import React, { useEffect, useState } from "react";

import "../DarkMode/darkMode.css";
import ThemeContext from "../DarkMode/ThemeContext";
import "./style.css";
import SideBar from "./SideBar";

function ScrollToTopOnMount() {
  useEffect(() => window.scrollTo(0, 0));
  return null;
}
function NavBar(props) {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeStyle = {
    dark: { backgroundColor: "#121317", color: "#f2f2f2" },
    light: { backgroundColor: "#fff", color: "#292c35" },
  };
  return (
    <ThemeContext.Provider
      value={darkMode ? darkModeStyle.dark : darkModeStyle.light}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          ...(darkMode ? darkModeStyle.dark : darkModeStyle.light),
        }}
      >
        <SideBar darkMode={darkMode} setDarkMode={setDarkMode} />
        {props.children}
      </div>
    </ThemeContext.Provider>
  );
}

export default NavBar;
