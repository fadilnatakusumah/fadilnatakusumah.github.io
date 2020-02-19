import React from 'react';

import TrackVisibility from 'react-on-screen';
import ScrollableAnchor from 'react-scrollable-anchor';

import './Skills.css';
import 'animate.css';

const Skill = ({ isVisible }) => {
  // if (isVisible) {
    return (
      <div className="skills animated bounceInUp">
        <div className="card-skill">
          <h3>Front End Development</h3>
          <div>
            <ul>
              <li>Javascript (ES6), Typescript</li>
              <li>HTML5</li>
              <li>CSS3 (Flexbox)</li>
              <li>JQuery</li>
              <li>React, React Native (novice)</li>
              <li>VueJS (novice)</li>
              <li>Flutter (novice)</li>
            </ul>
          </div>
        </div>
        <div className="card-skill">
          <h3>Back End Development</h3>
          <div>
            <ul>
              <li>NodeJS, Express (novice)</li>
              <li>Laravel, PHP</li>
              <li>MySQL, Mongo</li>
              <li>Rest API</li>
            </ul>
          </div>
        </div>

        <div className="card-skill">
          <h3>Development Tool Kit</h3>
          <div>
            <ul>
              <li>VS Code</li>
              <li>Git</li>
              <li>Github, Bitbucket</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
    )
  // }
  // return null
}

const skills = () => (
  <ScrollableAnchor id={"skills"}>
    <div className="skills-container">
      <h1>Skills</h1>
      {/* <TrackVisibility once> */}
        <Skill />
      {/* </TrackVisibility> */}
    </div>
  </ScrollableAnchor>
)

export default skills;