import React from 'react';
import TrackVisibility from 'react-on-screen';
import ScrollableAnchor from 'react-scrollable-anchor';

import Portfolio from './Portfolio/Portfolio';
import './Portfolios.css';

import dataApps from '../../data-env';

const portfolios = () => (
    <ScrollableAnchor id={"portfolios"}>
        <div className="portfolios-container">
            <h1 style={{ fontSize: '4em', color: 'purple', textAlign: 'center' }}>Latest work</h1>
            {dataApps.map((data, i) => {
                return (
                    <TrackVisibility key={i} once>
                        <Portfolio dataApp={data} />
                    </TrackVisibility>
                )
            }).reverse()}
            <div className="viewMoreProjects">
                <a href="https://github.com/fadilnatakusumah" target="_blank" rel="noopener noreferrer" title="GITHUB | fadilnatakusumah">
                    View more Projects
            </a>
            </div>
        </div>
    </ScrollableAnchor>
)

export default portfolios;