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

            <div>

              <a href={'#'} style={{textAlign: 'center'}}>
                <img style={imageStyle} src="https://img.icons8.com/color/512/000000/resume.png"></img>
                <h5>Resume.pdf</h5>
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
