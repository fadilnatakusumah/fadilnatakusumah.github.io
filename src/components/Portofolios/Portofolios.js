import React from 'react';
import TrackVisibility from 'react-on-screen';
import Portofolio from './Portofolio/Portofolio';
import './Portofolios.css';

import dataApps from './../../data-env';

const portfolios = () => (
    <div className="portofolios-container">
        <h1 style={{ fontSize: '2.8em', color: 'purple' }}>Latest work</h1>
        {dataApps.map(data => {
            return (
                <TrackVisibility once>
                    <Portofolio dataApp={data} />
                </TrackVisibility>
            )
        }).reverse()}
    </div>
)

export default portfolios;