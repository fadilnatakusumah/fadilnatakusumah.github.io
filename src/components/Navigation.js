import React, { Component } from 'react';

export class Navigation extends Component {
    render() {
        return (
            <div style={navStyle}>
                <ul className="nav justify-content-center" >
                    <li className="nav-item">
                        <a className="nav-link" href="#aboutComponent">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portofolioComponent">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#resumeComponent">Resume</a>
                    </li>
                </ul>
            </div>
        )
    }
}

// styling 1
const navStyle = {
    backgroundColor: '#390137',
    color: 'white'
}


export default Navigation;


