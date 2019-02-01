import React, { Component } from 'react';

export class Navigation2 extends Component {
    render() {
        return (
            <div className={'card'} style={navStyle}>
                {/* left */}
                <div style={{ paddingTop: '5px', display: 'flex', justifyContent: 'flex-start'}}>
                    <div>
                        <a style={linksLeft} href={'mailto:fadil.ntksmh@gmail.com'}>
                            <img style={iconStyle} src="https://img.icons8.com/ios/48/000000/secured-letter-filled.png"></img>
                            fadil.ntksmh@gmail.com
                        </a>
                    </div>
                </div>

                {/* right */}
                <div style={{ paddingTop: '5px', display: 'flex', justifyContent: 'flex-end'}}>
                    <div>
                        <a style={links} href={'https://www.linkedin.com/in/muhammad-fadhilah-mulyana-260678158'}>
                            <img style={iconStyle} src="https://img.icons8.com/ios/48/000000/linkedin-filled.png"></img>
                            Linkedin
                        </a>
                    </div>
                    <div>
                        <a style={links} href={'https://github.com/fadilnatakusumah'}>
                            <img style={iconStyle} src="https://img.icons8.com/windows/48/000000/github.png"></img>
                            Github</a>
                    </div>
                </div>
                
            </div>
        )
    }
}

// styling 1
const navStyle = {
    backgroundColor: '#390137',
    color: 'black',
    textAlign: 'center',
    height: '40px',
    marginBottom: '30px',
    backgroundColor: '#f8f8f8',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}
const links = {
    // float: 'right',
    marginRight: '28px',
    color: 'black',
    '&:hover': {
        color: '#390137'
    }
}

const linksLeft = {
    marginLeft: '28px',
}
const iconStyle = {
    float: 'clear',
    width: '18px',
    marginRight: '15px'
}

export default Navigation2;


