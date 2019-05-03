import React from 'react';

import TrackVisibility from 'react-on-screen';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import bulpIcon from '../../assets/icons/bulb_color_icon.png';
import heartIcon from '../../assets/icons/heart_color_icon.png';
import learnIcon from '../../assets/icons/code_color_icon.png';

import './WorkWithMe.css';
import 'animate.css';

const Work = ({ isVisible }) => {
  if (isVisible) {
    return (
      <div className="worksWithMe animated fadeInRight">
        <div className="reasons">
          <LazyLoadImage
            alt="icons"
            src={heartIcon}
            style={{ width: '150px', height: '150px' }}
          />
          <h2>Love to work</h2>
          <div>
            <p>Passionate and enjoy working on projects that can make everyone's life better</p>
          </div>
        </div>
        <div className="reasons">
          <LazyLoadImage
            alt="icons"
            src={learnIcon}
            style={{ width: '150px', height: '150px' }}
          />
          <h2>Adaptable</h2>
          <div>
            <p>Love and excited to learn new things, even if it's from your tech stack</p>
          </div>
        </div>
        <div className="reasons">
          <LazyLoadImage
            alt="icons"
            src={bulpIcon}
            style={{ width: '150px', height: '150px' }}
          />
          <h2>Love to Learn</h2>
          <div>
            <p>
              I always trying to keep up with the technologies, always trying to implements new ideas and make it into production
            </p>
          </div>
        </div>
      </div>
    )
  }
  return null
}

const workWithMe = () => (
  <div className="workWithMe-container">
    <h1>Why Work With Me</h1>
    <TrackVisibility once>
      <Work />
    </TrackVisibility>
  </div>
)

export default workWithMe;