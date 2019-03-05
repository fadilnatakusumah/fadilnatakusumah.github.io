import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor/lib/ScrollableAnchor";

export class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableAnchor id={"resumeComponent"}>
        <div className={"card about"}>
          <div className={"topCard"}>
            <div
              style={{
                float: "left",
                paddingLeft: "28px",
                paddingTop: "5px",
                color: "white"
              }}
            >
              Resume
            </div>
          </div>
          <div style={contentStyle}>
            <div style={{ width: '100%' }}>
              <h1>My Resume</h1>
              <p>Click to view resume</p>
              <hr />
            </div>

            <div className={'resume'}>

              <a href={'https://doc-0g-9k-docs.googleusercontent.com/docs/securesc/medpg10mmku73a8sfa12h5frp57f6fs7/fimdramt5d61vm7fftqsp23rk3s7bajs/1551513600000/00994631078964713686/00994631078964713686/1dBVJ7CjhbzO4ED_gISWZo6Tfze_6Q_yK?e=download&nonce=igm3r5dqkc5fk&user=00994631078964713686&hash=tjm63tq8c8ha7t4lg00srbn11g2fo9ne'} style={{ textAlign: 'center' }}>
                <img style={imageStyle} src="https://img.icons8.com/color/512/000000/resume.png"></img>
                <h5>Resume.pdf</h5>
              </a>

              <a href={'https://i.ibb.co/Pc9htQ4/CV.png'} target={'_blank'} style={{ textAlign: 'center' }}>
                <img style={imageStyle} src="https://img.icons8.com/color/512/000000/resume.png"></img>
                <h5>CV.png</h5>
              </a>
            </div>

          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

const contentStyle = {
  padding: "18px",
  marginBottom: '15px',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: 'column'
};

const imageStyle = {
  height: '250px',
  width: 'auto',
  borderRadius: '15px'
};

export default Resume;
