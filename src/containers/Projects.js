import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaGlobe } from 'react-icons/fa'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './Projects.scss'
import dataProjects from '../data-env'

const ProjectAnimateVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: .5,
      type: 'spring',
      when: "beforeChildren",
    }
  },
  exit: {
    opacity: 0,
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
}


function Projects() {
  const [selectedProject, setProject] = useState(dataProjects[0]);

  const onSelectProject = (value) => {
    setProject(null)
    setTimeout(() => {
      setProject(value)
    }, 500)
  }
  return (
    <motion.div variants={ProjectAnimateVariants}
      className="projectContainer"
      animate="visible"
      initial="hidden"
      exit="exit"
    >
      <AnimatePresence>
        {selectedProject &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="selectedProject">
            <div key={selectedProject.projectName || "none"}>
              <LazyLoadImage src={selectedProject.imageSrc} />
              <h4>{selectedProject.projectName}</h4>
              <h5>{selectedProject.description}</h5>
              <div>
                <strong>Technologies</strong>: {selectedProject.technologies.join(', ')}
              </div>
              <div className="buttonsContainer">
                <a target="_blank" href={selectedProject.linkGithub} className="button"><FaCode />Github</a>
                {selectedProject.linkApp && <a target="_blank" href={selectedProject.linkApp} className="button"><FaGlobe />View App</a>}
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
      <motion.div className="projectList">
        {dataProjects.map((project, key) => (
          <div onClick={() => onSelectProject(project)} className={selectedProject && project.projectName === selectedProject.projectName ? "point active" : "point"} key={key}>
            {key + 1}
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Projects
