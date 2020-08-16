import React, { useState } from 'react'

import dataProjects from '../data-env'
import './Projects.scss'

function Projects() {
  const [selectedProject, setProject] = useState(dataProjects[0]);
  return (
    <div>
      <div>

      </div>
      <div className="projectList">
        {dataProjects.map((project, key) => (
          <div key={key}>
            <img src={project.imageSrc} />
            <h4>{project.projectName}</h4>
            <h5>{project.description}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
