import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  console.log(ProjectItem)

  let projectMap = projects.map(maps => {
    return <ProjectItem name={maps.name} about={maps.about} technologies={maps.technologies}  key={maps.id} />
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectMap}</div>
    </div>
  );
}

export default ProjectList
