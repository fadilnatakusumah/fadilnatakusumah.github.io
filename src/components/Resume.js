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

              <a href={'https://doc-04-9k-docs.googleusercontent.com/docs/securesc/medpg10mmku73a8sfa12h5frp57f6fs7/dvkl6dl64dilrc8lvi5ck8gamnv2nld3/1549015200000/00994631078964713686/00994631078964713686/1W1b3bWstx90XUO7eRugJoTDyf21HAdJV?e=download&nonce=qc7tq781k4li8&user=00994631078964713686&hash=7mk0tti8jcpkhuek7unje2aoqqcis1bh'} style={{textAlign: 'center'}}>
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
