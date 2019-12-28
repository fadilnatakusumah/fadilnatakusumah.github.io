import React from 'react';

import Label from '../../../components/Label/Label';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './Portfolio.css';
import 'animate.css';

const portfolio = (props) => {
    const { dataApp } = props;
    if (props.isVisible) {
        return (
            <div className="portfolio-container animated zoomInLeft">
                <LazyLoadImage
                    alt={dataApp.projectName}
                    src={dataApp.imageSrc? dataApp.imageSrc : "https://developersushant.files.wordpress.com/2015/02/no-image-available.png"}
                    className={"app-preview"}
                />
                <div className={"app-description"}>
                    <h1 >{dataApp.projectName}</h1>
                    <p>{dataApp.description}</p>
                    <h6>Technologies:</h6>
                    <div className={"label-wrapper"}>
                        {dataApp.technologies.map((tech, i) => (
                            <Label title={tech} key={i} />
                        ))}
                    </div>
                    <div className={"button-app-wrapper"}>
                        {dataApp.linkGithub && <a href={dataApp.linkGithub} rel="noopener noreferrer" target="_blank" >Github</a>}
                        {dataApp.linkApp && <a href={dataApp.linkApp} rel="noopener noreferrer" target="_blank" >View App</a>}
                    </div>
                </div>
            </div>
        )
    }
    return null;
}

export default portfolio;