import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

export class Navigation2 extends Component {
    render() {
        return (
            <div className={'card'} style={navStyle}>
                {/* left */}
                <div style={{ paddingTop: '5px', display: 'flex', justifyContent: 'flex-start' }}>
                    {/* <MediaQuery query={'(min-device-width:577px)'}> */}
                    <div className={'full_email'}>
                        <a style={linksLeft} href={'mailto:fadil.ntksmh@gmail.com'}>
                            <img style={iconStyle} src="https://img.icons8.com/ios-glyphs/80/000000/secured-letter.png"></img>
                            fadil.ntksmh@gmail.com
                            </a>
                    </div>
                    {/* </MediaQuery> */}
                    {/* <MediaQuery query={'(min-device-width: 577px)'}> */}
                    <div className={'email'}>
                        <a style={linksLeft} href={'mailto:fadil.ntksmh@gmail.com'}>
                            <img style={iconStyle} src="https://img.icons8.com/ios-glyphs/80/000000/secured-letter.png"></img>
                            Email
                            </a>
                    </div>
                    {/* </MediaQuery> */}
                </div>

                {/* right */}
                <div style={{ paddingTop: '5px', display: 'flex', justifyContent: 'flex-end' }}>
                    <div>
                        <a style={links} target={'_blank'} href={'https://www.hackerrank.com/fadil_ntksmh'}>
                            <img style={iconStyle} src="data:image/png;base64,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"></img>
                            Hackerrank
                        </a>
                    </div>
                    <div>
                        <a style={links} target={'_blank'} href={'https://linkedin.com/in/muhammad-fadhilah-mulyana'}>
                            <img style={iconStyle} src="https://img.icons8.com/ios-glyphs/480/000000/linkedin.png"></img>
                            Linkedin
                        </a>
                    </div>
                    <div>
                        <a style={links} target={'_blank'} href={'https://github.com/fadilnatakusumah'}>
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
    marginRight: '10px'
}

export default Navigation2;


