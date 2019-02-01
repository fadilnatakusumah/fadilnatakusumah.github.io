import React, { Component } from 'react';

export class Navigation extends Component {
    render() {
        return (
            <div style={navStyle}>
                <div className={'container'} style={{ color: 'black' }}>
                    <a style={linksLeft} target={'_blank'} href={'mailto:fadil.ntksmh@gmail.com'}>
                        <img style={iconStyle} src="https://img.icons8.com/color/512/000000/new-post.png"></img>
                        fadil.ntksmh@gmail.com
                        </a>
                    <a style={linksLeft} target={'_blank'} href={'https://reactjs.org/'}>
                        <img style={iconStyle} src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png"></img>
                        This page was made with React
                        </a>
                    <a style={linksLeft} target={'_blank'} href={'https://www.linkedin.com/in/muhammad-fadhilah-mulyana-260678158/'}>
                        <img style={iconStyle} src="https://img.icons8.com/color/48/000000/linkedin.png"></img>
                        Linkedin
                        </a>
                    <a style={linksLeft} target={'_blank'} href={'https://github.com/fadilnatakusumah'}>
                        <img style={iconStyle} src="https://img.icons8.com/color/48/000000/github.png"></img>
                        Github
                        </a>
                </div>
            </div>
        )
    }
}

// styling 1
const navStyle = {
    padding: '15px',
    backgroundColor: '#f8f8f8',
    color: 'white',
    position: 'fix',
    bottom: '0',
    left: '0',
    right: '0',
    // height: '100px'
}
const linksLeft = {
    color: 'black',
    marginLeft: '28px',
    textDecoration: 'none',
    display: 'block'
}
const iconStyle = {
    float: 'clear',
    width: '20px',
    marginRight: '15px'
}

export default Navigation;


