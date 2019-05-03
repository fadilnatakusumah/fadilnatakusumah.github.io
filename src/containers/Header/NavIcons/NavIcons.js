import React from 'react';

import './NavIcons.css';
import 'animate.css';
import emailIcon from '../../../assets/images/email_icon.png';
import githubIcon from '../../../assets/images/github_icon.png';
import linkedinIcon from '../../../assets/images/linkedin_icon.png';
import hackerrankIcon from '../../../assets/images/hackerrank_icon.png';

class Nav extends React.Component {
    render() {
        return (
            <div className="navicons-container">
                <div className="navicons-left animated bounceInUp">
                    <a href="#contact" rel="noopener noreferrer" title="CONTACT ME">
                        Contact me
                    </a>

                </div>
                <div className="navicons-right animated bounceInUp">
                    <a href="mailto:fadil.ntksmh@gmail.com" target="_blank" rel="noopener noreferrer" title="fadil.ntksmh@gmail.com">
                        <img alt="emailIcon" className={"iconImage"} src={emailIcon}></img>
                    </a>
                    <a href="https://github.com/fadilnatakusumah" target="_blank" rel="noopener noreferrer" title="GITHUB | fadilnatakusumah">
                        <img alt="githubIcon" className={"iconImage"} src={githubIcon}></img>
                    </a>
                    <a href="https://linkedin.com/in/muhammad-fadhilah-mulyana" target="_blank" rel="noopener noreferrer" title="LINKEDIN | Muhammad Fadhilah Mulyana">
                        <img alt="linkedIcon" className={"iconImage"} src={linkedinIcon}></img>
                    </a>
                    <a href="https://www.hackerrank.com/fadil_ntksmh" target="_blank" rel="noopener noreferrer" title="HACKERRANK | fadil_ntksmh">
                        <img alt="hackerrankIcon" className={"iconImage"} src={hackerrankIcon}></img>
                    </a>
                </div>

            </div>
        )
    }
}

export default Nav;