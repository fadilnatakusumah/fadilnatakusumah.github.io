import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor/lib/ScrollableAnchor";
import bukuCeritamu from "../assets/images/bukuceritamu.PNG";
import faceDetection from "../assets/images/facedetection.png";
import jobFinder from "../assets/images/jobfinder.png";

export class Portfolio extends Component {
  render() {
    return (
      <ScrollableAnchor id={"portofolioComponent"}>
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
              Portofolio
            </div>
          </div>
          <div style={contentStyle}>
            <div style={{ width: '100%' }}>
              <h1>Portofolio</h1>
              <p>Sort by most recent projects</p>
              <hr />
            </div>
            <br />

            <div>

              <h4>React Native Projects</h4>
              <br />
              <div>
                {/* project rn 1 */}
                <div style={projectStyle}>
                  <img
                    src={jobFinder}
                    className="image-project"
                    alt="logo"
                  />
                  <div style={textContentStyle}>
                    <h3>BukuCeritamu</h3>
                    <p>
                      An App that provides jobs information at your area, and you can save the job first or directly apply to it
                      </p>
                    <div>
                      <small>Build with React Native</small>
                    </div>
                    <div>
                      <a style={{marginRight: 10}} href={'https://expo.io/@fadilnatakusumah/jobFinder'} target={'_blank'}>View App</a> 
                      <a target={'_blank'} href={'https://github.com/fadilnatakusumah/react-native-job-finder'}>Github</a>
                    </div>
                  </div>
                </div>
                {/* project laravel 1 */}
              </div>
              {/* endof laravel projects */}
              <hr />
              <br />
              <h4>React Projects</h4>
              <br />
              <div>
                {/* project laravel 1 */}
                <div style={projectStyle}>
                  <img
                    src={faceDetection}
                    className="image-project"
                    alt="logo"
                  />
                  <div style={textContentStyle}>
                    <h3>Face Detection</h3>
                    <p>
                      Can detect face in image via uploading it or insert a link image. App use an AI API that detect the face, and display the result image
                    </p>
                    <div>
                      <small>Build with React and Clarifai API</small>
                    </div>
                    <div>
                      <a style={buttonStyle} href={'https://fadilnatakusumah.github.io/react-facedetection-app/'} target={'_blank'}>Visit</a> <a target={'_blank'} href={'https://github.com/fadilnatakusumah/react-facedetection-app'}>Github</a>
                    </div>
                  </div>
                </div>
                {/* project laravel 1 */}
              </div>
              {/* endof react projects */}
              <br />

              <hr />

              <h4>Laravel Projects</h4>
              <br />
              <div>
                {/* project laravel 1 */}
                <div style={projectStyle}>
                  <img
                    src={bukuCeritamu}
                    className="image-project"
                    alt="logo"
                  />
                  <div style={textContentStyle}>
                    <h3>BukuCeritamu</h3>
                    <p>
                      Basicly a web based app that allows you to make a storybook with supportive pictures. Plus you can export it to PDF
                  </p>
                    <div>
                      <small>Build with Laravel and Fabric.js</small>
                    </div>
                    <div>
                      <a href={'https://fadilnatakusumah.000webhostapp.com'} target={'_blank'}>Visit</a> <a target={'_blank'} href={'https://github.com/fadilnatakusumah/bukuceritamu'}>Github</a>
                    </div>
                  </div>
                </div>
                {/* project laravel 1 */}
              </div>
              {/* endof laravel projects */}

              <hr />

            </div>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

const contentStyle = {
  padding: "18px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexDirection: "column",
  flexWrap: 'wrap'
};

const textContentStyle = {
  alignItems: "space-around",
  flex: 1,
  flexWrap: 'wrap',
  padding: "20px",
  fontSize: "18px",
};
const buttonStyle = {
  borderRadius: '5px',
  borderWidth: '3px',
  borderColor: 'purple'
}

const projectStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: '25px'
};

export default Portfolio;
