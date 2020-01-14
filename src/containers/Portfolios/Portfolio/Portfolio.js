import React from 'react';

import Label from '../../../components/Label/Label';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import TrackVisibility from 'react-on-screen';

import './Portfolio.css';
import 'animate.css';

import dataApps from '../../../data-env';

const portfolio = () => {
    return (
        <div className="portfolio-container animated zoomInLeft">
            {dataApps.map(dataApp => (
                <div className="app-wrapper">
                    <div className="image-wrapper">
                        <img src={dataApp.imageSrc ? dataApp.imageSrc : "https://developersushant.files.wordpress.com/2015/02/no-image-available.png"} />
                    </div>
                    <div className="app-description">
                        <h3>{dataApp.projectName}</h3>
                        <p>{dataApp.description}</p>
                        <div className="label-wrapper">
                            {dataApp.technologies.map((tech, i) => (
                                <label key={i}>{tech}</label>
                            ))}
                        </div>
                        <div className="button-app-wrapper">
                            {dataApp.linkGithub && <a href={dataApp.linkGithub} rel="noopener noreferrer" target="_blank" >Github</a>}
                            {dataApp.linkApp && <a href={dataApp.linkApp} rel="noopener noreferrer" target="_blank" >View App</a>}
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
    return null;
}

export default portfolio;