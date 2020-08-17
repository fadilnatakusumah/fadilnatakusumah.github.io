import React from 'react'
import { motion } from 'framer-motion'

import './Contacts.scss';

const ContactAnimateVariants = {
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

function Contacts() {
  return (
    <motion.div
      variants={ContactAnimateVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
      className="contactContainer"
    >
      <h1>Interested in working together?</h1>
      <h3>Just give me a shout!</h3>
      <div className="connectButtons">
        <a style={{ backgroundColor: '#6E3D95' }} href="mailto:fadil.ntksmh@gmail.com" target="_blank" rel="noopener noreferrer" title="fadil.ntksmh@gmail.com" className="animated fadeInLeft">
          Send an Email
            </a>
        <a style={{ backgroundColor: '#0077B5' }} href="https://linkedin.com/in/muhammad-fadhilah-mulyana" target="_blank" rel="noopener noreferrer" title="LINKEDIN | Muhammad Fadhilah Mulyana" className="animated fadeInLeft">
          Connect on LinkedIn
            </a>
        <a style={{ backgroundColor: '#192ABF' }} href="https://www.facebook.com/fadilnatakusumah" target="_blank" rel="noopener noreferrer" title="FACEBOOK | Fadil Natakusumah" className="animated fadeInLeft">
          Message on Facebook
        </a>
      </div>
    </motion.div>
  )
}

export default Contacts
