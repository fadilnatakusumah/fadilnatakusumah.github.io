import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import Portfolio from './Portfolio/Portfolio';
import './Portfolios.css';


const portfolios = () => (
    <ScrollableAnchor id={"portfolios"}>
        <div className="portfolios-container">
            <h1 style={{ fontSize: '4em', color: 'purple', textAlign: 'center' }}>Latest work</h1>
            <Portfolio />
            <div className="viewMoreProjects">
                <a href="https://github.com/fadilnatakusumah" target="_blank" rel="noopener noreferrer" title="GITHUB | fadilnatakusumah">
                    View more Projects
                </a>
            </div>
        </div>
    </ScrollableAnchor>
)

export default portfolios;