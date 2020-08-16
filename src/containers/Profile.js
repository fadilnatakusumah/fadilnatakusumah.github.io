import React, { useState } from 'react'
import { FaLaptopCode, FaInfoCircle } from 'react-icons/fa'
import ProfileImage from '../assets/images/preview.jpg'
import { AnimatePresence, motion } from 'framer-motion';

import './Profile.scss'
import emailIcon from '../assets/images/email_icon.png';
import githubIcon from '../assets/images/github_icon.png';
import linkedinIcon from '../assets/images/linkedin_icon.png';
import hackerrankIcon from '../assets/images/hackerrank_icon.png';

import html5 from '../assets/techIcons/html5.png';
import css3 from '../assets/techIcons/css3.png';
import javascript from '../assets/techIcons/js.png';
import typescript from '../assets/techIcons/ts.png';
import react from '../assets/techIcons/react.png';
import vue from '../assets/techIcons/vue.png';
import nodejs from '../assets/techIcons/nodejs.png';
import flutter from '../assets/techIcons/flutter.png';

const ProfileAnimateVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: '0',
    transition: {
      staggerChildren: 0.2,
      duration: .5,
      type: 'spring',
      when: "beforeChildren",
    }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }

}

const InfoAnimateVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: '0',
    transition: {
      delay: .5,
      duration: .1,
      type: 'spring',
    }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
}

const socialAnimateVariants = {
  hidden: {
    opacity: 0,
    x: '200vw',
    // x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: '0',
    // x: '0',
    transition: {
      delay: 1,
      type: 'spring',
    },
  },

}

function Profile() {
  const [mode, toggleMode] = useState('about');

  const renderInfo = (type) => {
    switch (type) {
      case "about":
        return <AboutMe />
      default:
        return <TechStack />
    }
  }

  return (
    <motion.div className="profileContainer"
      variants={ProfileAnimateVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
    >
      <img src={ProfileImage} />
      <div>
        <h3>Muhammad Fadhilah Mulyana</h3>
        <h4>Software Engineer | fadil.ntksmh@gmail.com </h4>
        <hr />
        <div>
          <div className="buttonContainer">
            <button className={`button ${mode === "about" ? "active" : ""}`} onClick={() => toggleMode('about')}>
              <FaInfoCircle /> &nbsp; About Me
            </button>
            <button className={`button ${mode === "techStack" ? "active" : ""}`} onClick={() => toggleMode('techStack')}>
              <FaLaptopCode /> &nbsp; Skills and Technologies
            </button>
          </div>
          <AnimatePresence exitBeforeEnter >
            {mode === "about"
              ? <AboutMe key="aboutme" />
              : <TechStack key="techStack" />
            }
          </AnimatePresence>
        </div>
      </div>
    </motion.div >
  )
}

const AboutMe = () => (
  <motion.div className="info"
    variants={InfoAnimateVariants}
    animate="visible"
    initial="hidden"
    exit="exit"
  >
    <h5>About Me</h5>
    <p>
      A Web Developer. Loves Javascript. Likes simple things. Mostly work with React, but in my spare time I use to learn React Native, Vue, Flutter, and others.
      I always eager to learn something new, and breath decent technology everyday with good architecture to solving problems.
      Current position: Yogyakarta, Indonesia (Available to relocate)
    </p>

    <motion.div variants={socialAnimateVariants} className="socialContacts">
      <a href="mailto:fadil.ntksmh@gmail.com" target="_blank" rel="noopener noreferrer" title="fadil.ntksmh@gmail.com">
        <img alt="emailIcon" className={"iconImage"} src={emailIcon}></img>
      </a>
      <a href="https://github.com/fadilnatakusumah" target="_blank" rel="noopener noreferrer" title="GITHUB | fadilnatakusumah">
        <img alt="githubIcon" className={"iconImage"} src={githubIcon}></img>
      </a>
      <a href="https://linkedin.com/in/muhammad-fadhilah-mulyana" target="_blank" rel="noopener noreferrer" title="LINKEDIN | Muhammad Fadhilah Mulyana">
        <img alt="linkedIcon" className={"iconImage"} src={linkedinIcon}></img>
      </a>
      <a href="https://www.hackerrank.com/fadil_ntksmh" target="_blank" rel="noopener noreferrer" title="HACKERRANK | fadil_ntksmh">
        <img alt="hackerrankIcon" className={"iconImage"} src={hackerrankIcon}></img>
      </a>
    </motion.div>
  </motion.div>
)


const TechStack = () => (
  <motion.div className="info"
    variants={InfoAnimateVariants}
    animate="visible"
    initial="hidden"
    exit="exit"
  >
    <h5>Skills & Technologies</h5>
    <motion.div variants={socialAnimateVariants} className="techStack">
      <div className="skill">
        <img src={html5} /> HTML5
      </div>
      <div className="skill">
        <img src={css3} /> CSS3
      </div>
      <div className="skill">
        <img src={javascript} /> Javascript
      </div>
      <div className="skill">
        <img src={typescript} /> Typescript
      </div>
      <div className="skill">
        <img src={react} /> React
      </div>
      <div className="skill">
        <img src={vue} /> Vue
      </div>
      <div className="skill">
        <img src={nodejs} /> NodeJS
      </div>
      <div className="skill">
        <img src={flutter} /> Flutter
      </div>
    </motion.div>
    {/* <a href="mailto:fadil.ntksmh@gmail.com" target="_blank" rel="noopener noreferrer" title="fadil.ntksmh@gmail.com">
        <img alt="emailIcon" className={"iconImage"} src={emailIcon}></img>
      </a>
      <a href="https://github.com/fadilnatakusumah" target="_blank" rel="noopener noreferrer" title="GITHUB | fadilnatakusumah">
        <img alt="githubIcon" className={"iconImage"} src={githubIcon}></img>
      </a>
      <a href="https://linkedin.com/in/muhammad-fadhilah-mulyana" target="_blank" rel="noopener noreferrer" title="LINKEDIN | Muhammad Fadhilah Mulyana">
        <img alt="linkedIcon" className={"iconImage"} src={linkedinIcon}></img>
      </a>
      <a href="https://www.hackerrank.com/fadil_ntksmh" target="_blank" rel="noopener noreferrer" title="HACKERRANK | fadil_ntksmh">
        <img alt="hackerrankIcon" className={"iconImage"} src={hackerrankIcon}></img>
      </a> */}
  </motion.div>
)
export default Profile
