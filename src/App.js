import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Blog from "./Pages/Blog";
import { allProjects } from "./data/constants";
import Project from "./components/Project";
import { chris } from "./data/constants";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import MainContainer from "./components/MainContainer";
import ThemeContext from "./components/DarkMode/ThemeContext";
import ContactMe from "./Pages/ContactMe/ContactMe";
import Technologies from "./Pages/Technologies/Technologies";
import Projects from "./Pages/Projects";

AOS.init({ duration: 1000 });
console.log(chris);

let routes = allProjects.map(function (element) {
  return (
    <Route
      key={element.title}
      exact
      path={element.localLink}
      component={() => {
        const theme = useContext(ThemeContext);
        const stylo = {
          fontFamily: "Noto Sans JP",
          ...theme,
        };
        return <Project stylo={stylo} project={element} />;
      }}
    />
  );
});

function App() {
  return (
    <Router>
      <MainContainer>
        <Route exact path="/" component={Landing} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact-me" component={ContactMe} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/current-stack" component={Technologies} />
        {routes}
      </MainContainer>
    </Router>
  );
}

export default App;
//  {allProjects.map(function(i) {
//         return (
//           <Route
//             exact
//             path={allProjects.localLink}
//             component={() => <Project project={i} />}
//           />
//         );
//       })}
//       <Route
//         exact
//         path="/starkClass"
//         component={() => <Project project={allProjects[0]} />}
//       />
//       <Route
//         exact
//         path="/cleanMeUp"
//         component={() => <Project project={allProjects[1]} />}
//       />
