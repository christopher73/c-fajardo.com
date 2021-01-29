import React, { useContext, useState } from "react";
import ThemeContext from "../../components/DarkMode/ThemeContext";
import ProjectList from "../../components/ProjectList";
import { allProjects } from "../../data/constants";
import ScrollUp from "../../components/ScrollUp/ScrollUp";
import "./style.css";
import { GifBackground } from "../../components/GifBackground";

export default function Landing() {
  const [word, setWord] = useState("");
  const theme = useContext(ThemeContext);
  const stylo = {
    fontFamily: "Noto Sans JP",
    ...theme,
  };
  const handleClick = (clickedWord) => {
    setWord((s) => (s === clickedWord ? "" : clickedWord));
  };
  return (
    <div style={stylo} className="landing">
      <GifBackground word={word} />
      <div className="ilovetocode_container">
        <div className="ilovetocode_image">
          <img src="./assets/img/chrisPort.png" />
        </div>
        <div className="ilovetocode">
          <button onClick={() => handleClick("i")}>I</button>
          <button onClick={() => handleClick("love")}>love</button>
          <button onClick={() => handleClick("to")}>to</button>
          <button onClick={() => handleClick("code")}>code</button>
        </div>
        <div className="ilovetocode">
          <p>{"Click the buttons above =)"}</p>
        </div>
      </div>
    </div>
  );
}

//OLD CODE
// import SlideShow from "../../components/SlideShow/SlideShow";
// import video from "../../assets/changes.mp4";
// const shortid = require("shortid");
// import TypedString from "../../components/Typed";
// import SocialMedia from "../../components/SocialMedia/SocialMedia";
// useEffect(() => {
//   if (showDiv) {
//     document.body.style.overflow = "unset";
//   } else {
//     document.body.style.overflow = "hidden";
//   }
// });
/* <video
autoPlay
muted
onEnded={() => {
localStorage.setItem("showDiv", true);
setShowDiv(true);
}}
className='video'
>
<source src={video} type='video/mp4' />
</video>
{console.log(stylo)} */
