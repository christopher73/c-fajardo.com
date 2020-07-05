import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
//'#026670'
function ProjectList({ project }) {
  return (
    <div className='landing-project-div'>
      <Link to={project.localLink}>
        <img
          alt={project.pictureLink}
          className='landing-project-image'
          src={project.pictureLink}
        ></img>
      </Link>

      <h1 className='landing-project-tittle'>{project.title} </h1>
      <div className='landing-project-div-description'>
        <p>{project.desc}</p>
      </div>
    </div>
  );
}
export default ProjectList;
//oold code

/* <ul
style={{
backgroundColor: "rgba(2, 102, 112, .7)",
}}
>
{props.project.descLong.map(function (elem, i) {
return (
<li key={i} className='my-2 '>
{elem}
</li>
);
})}
</ul> */
/* <div className='row'>
{props.project.chartPower.data.labels.map(function (elem, i) {
return (
<img
key={i}
className='col-md-6 col-sm-4 col-3 my-2 text-center'
alt={elem}
style={{ width: "100%", height: "40px" }}
src={`./assets/img/icons/${elem}`}
></img>
);
})}
</div>{" "} */
