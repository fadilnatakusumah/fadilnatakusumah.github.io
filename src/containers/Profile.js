import React, { useState } from 'react'
import { FaLaptopCode, FaInfoCircle, FaEnvelope, FaDownload } from 'react-icons/fa'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AnimatePresence, motion } from 'framer-motion';

import ProfileImage from '../assets/images/preview.jpg'
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
    opacity: 0,
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
    opacity: 0,
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

  return (
    <motion.div className="profileContainer"
      variants={ProfileAnimateVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
    >

      <LazyLoadImage src={ProfileImage} alt="fadilnatakusumah-profileimage" />
      <div>
        <h3>Muhammad Fadhilah Mulyana</h3>
        <h4>Software Engineer</h4>
        <h6><FaEnvelope /> fadil.ntksmh@gmail.com </h6>
        <hr />
        <div>
          <div className="buttonsContainer">
            <button className={`button ${mode === "about" ? "active" : ""}`} onClick={() => toggleMode('about')}>
              <FaInfoCircle /> &nbsp; About Me
            </button>
            <button className={`button ${mode === "techStack" ? "active" : ""}`} onClick={() => toggleMode('techStack')}>
              <FaLaptopCode /> &nbsp; Skills and Technologies
            </button>
            <a target="_blank" className={`button`} href="https://drive.google.com/file/d/1aKGsdIcNn7ccxxaUPDwlvKu1ujx7766y/view">
              <FaDownload /> &nbsp; Download Resume
            </a>
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
      <br />Current position: <b>Yogyakarta, Indonesia</b> (Available to relocate)
    </p>

    <motion.div variants={socialAnimateVariants} className="socialContacts">
      <a href="mailto:fadil.ntksmh@gmail.com" target="_blank" rel="noopener noreferrer" title="fadil.ntksmh@gmail.com">
        <LazyLoadImage alt="emailIcon" className={"iconImage"} src={emailIcon}></LazyLoadImage>
      </a>
      <a href="https://github.com/fadilnatakusumah" target="_blank" rel="noopener noreferrer" title="GITHUB | fadilnatakusumah">
        <LazyLoadImage alt="githubIcon" className={"iconImage"} src={githubIcon}></LazyLoadImage>
      </a>
      <a href="https://linkedin.com/in/muhammad-fadhilah-mulyana" target="_blank" rel="noopener noreferrer" title="LINKEDIN | Muhammad Fadhilah Mulyana">
        <LazyLoadImage alt="linkedIcon" className={"iconImage"} src={linkedinIcon}></LazyLoadImage>
      </a>
      <a href="https://www.hackerrank.com/fadil_ntksmh" target="_blank" rel="noopener noreferrer" title="HACKERRANK | fadil_ntksmh">
        <LazyLoadImage alt="hackerrankIcon" className={"iconImage"} src={hackerrankIcon}></LazyLoadImage>
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
        <LazyLoadImage src={html5} /> HTML5
      </div>
      <div className="skill">
        <LazyLoadImage src={css3} /> CSS3
      </div>
      <div className="skill">
        <LazyLoadImage src={javascript} /> Javascript
      </div>
      <div className="skill">
        <LazyLoadImage src={typescript} /> Typescript
      </div>
      <div className="skill">
        <LazyLoadImage src={react} /> React
      </div>
      <div className="skill">
        <LazyLoadImage src={vue} /> Vue
      </div>
      <div className="skill">
        <LazyLoadImage src={nodejs} /> NodeJS
      </div>
      <div className="skill">
        <LazyLoadImage src={flutter} /> Flutter
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
