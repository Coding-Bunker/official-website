import React from "react"

import ProjectCard from "../components/ProjectCard/ProjectCard"

const IndexPage = () => (
  <div>
    <ProjectCard img={require("../images/project.png")} title="Progetto 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id" />
  </div>
)

export default IndexPage
