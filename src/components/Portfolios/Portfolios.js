import React from 'react';
import TrackVisibility from 'react-on-screen';
import Portfolio from './Portfolio/Portfolio';
import './Portfolios.css';

import dataApps from '../../data-env';

const portfolios = () => (
    <div className="portfolios-container">
        <h1 style={{ fontSize: '4em', color: 'purple', textAlign: 'center' }}>Latest work</h1>
        {dataApps.map(data => {
            return (
                <TrackVisibility once>
                    <Portfolio dataApp={data} />
                </TrackVisibility>
            )
        }).reverse()}
    </div>
)

export default portfolios;