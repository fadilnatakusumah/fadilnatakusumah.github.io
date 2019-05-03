import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import TrackVisibility from 'react-on-screen';

import ProfilePict from '../../assets/images/preview.jpg';

import './About.css';
import 'animate.css';

const Content = ({ isVisible }) => {
    if (isVisible) {
        return (
            <div className="about animated bounceInRight">
                <h1>About Me</h1>
                <div className="aboutme-content">
                    <LazyLoadImage
                        alt={"profile-picture"}
                        src={ProfilePict}
                        className={"profile-pict"}
                    />
                    <div>
                        <p>Self taught Web Developer. Loves Javascript. Likes simple things</p>
                        <hr />
                        <p>full name is <b>Muhammad Fadhilah Mulyana</b> but use to be called Fadil. Likes to play with React, React Native, Laravel, VueJS and others</p>
                        <p>I'm always eager to learn something new, and breath decent
                            technology everyday with good architecture to
                        solving problems.</p>
                        <p>Current position: <b>Yogyakarta, Indonesia</b></p>
                    </div>
                </div>
            </div>
        )
    }
    return null;
}

const about = () => (
    <div className="about-container">
        <TrackVisibility once>
            <Content />
        </TrackVisibility>
    </div>
)

export default about;