import React from 'react';

import TrackVisibility from 'react-on-screen';
import ScrollableAnchor from 'react-scrollable-anchor';

import './Contact.css';
import 'animate.css';

const Contact = ({ isVisible }) => {
  // if (isVisible) {
    return (
      <div className="contact animated fadeInRight">
        <div className="connect-buttons">
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
        <div className="footer">
          Copyright Muhammad Fadhilah Mulyana &copy; 2019
        </div>
      </div>
    )
  // }
  // return null
}

const contactContainer = () => (
  <ScrollableAnchor id={"contact"}>
    <div className="contact-container">
      <h1>Interested in working together?</h1>
      <h3>Just give me a shout!</h3>
      {/* <TrackVisibility once> */}
        <Contact />
      {/* </TrackVisibility> */}
    </div>
  </ScrollableAnchor>
)

export default contactContainer;