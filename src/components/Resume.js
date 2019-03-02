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

              <a href={'https://doc-0g-9k-docs.googleusercontent.com/docs/securesc/medpg10mmku73a8sfa12h5frp57f6fs7/37hsufckjkc1s81q4q1om65lsh8bsb3e/1550282400000/00994631078964713686/00994631078964713686/1dBVJ7CjhbzO4ED_gISWZo6Tfze_6Q_yK?e=download&nonce=fms1m9tbd5pqo&user=00994631078964713686&hash=8jdp4dv8duhehjjef87g6schejsbb5i6'} style={{ textAlign: 'center' }}>
                <img style={imageStyle} src="https://img.icons8.com/color/512/000000/resume.png"></img>
                <h5>Resume.pdf</h5>
              </a>

              <a href={'https://i.ibb.co/8dTFwZc/CV.png'} target={'_blank'} style={{ textAlign: 'center' }}>
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
