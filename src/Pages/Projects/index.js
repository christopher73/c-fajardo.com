import React from 'react';
import { allProjects } from '../../data/constants';
import ProjectList from '../../components/ProjectList';
let projectDivs = allProjects.map(function(i) {
  return <ProjectList key={i.title} project={i} />;
});

export default function Projects() {
  return <div className="container"> {projectDivs}</div>;
}
