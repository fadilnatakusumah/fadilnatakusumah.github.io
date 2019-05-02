import React from 'react';

import Label from './../../Label/Label';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './Portofolio.css';
import 'animate.css';

const portfolio = (props) => {
    const { dataApp } = props;
    if (props.isVisible) {
        return (
            <div className="portofolio-container animated zoomInLeft">
                <LazyLoadImage
                    alt={dataApp.projectName}
                    src={dataApp.imageSrc}
                    className={"app-preview"}
                />
                <div className={"app-description"}>
                    <h1 >{dataApp.projectName}</h1>
                    <p>{dataApp.description}</p>
                    <h6>Technologies:</h6>
                    <div className={"label-wrapper"}>
                        {dataApp.technologies.map(tech => (
                            <Label title={tech} />
                        ))}
                    </div>
                    <div className={"button-app-wrapper"}>
                        <a href={dataApp.linkGithub} rel="noopener noreferrer" target="_blank" >Github</a>
                        <a href={dataApp.linkApp} rel="noopener noreferrer" target="_blank" >View App</a>
                    </div>
                </div>
            </div>
        )
    }
    return null;
}

export default portfolio;