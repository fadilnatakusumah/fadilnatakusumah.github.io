import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor/lib/ScrollableAnchor";
import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';

export class Resume extends Component {
  constructor(props) {
    super(props);
    this.state={
      viewResume: false,
      viewCv: false,
    }
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

              <a href={'https://drive.google.com/open?id=1dBVJ7CjhbzO4ED_gISWZo6Tfze_6Q_yK'} target="blank" style={{ textAlign: 'center', textDecoration: 'none' }}>
                <img style={imageStyle} src="https://img.icons8.com/color/512/000000/resume.png"></img>
                <h5>Resume.pdf</h5>
              </a>
              
              {/* <div onClick={()=>this.setState({viewResume: !this.state.viewResume})} href={'https://i.ibb.co/Pc9htQ4/CV.png'} style={{ textAlign: 'center', cursor: 'pointer' }}>
                <img style={imageStyle} src="https://img.icons8.com/color/512/000000/resume.png"></img>
                <h5>Resume.pdf</h5>
                <Viewer
                visible={this.state.viewResume}
                onClose={() => this.setState({viewResume: false})}
                images={[{src: "https://drive.google.com/open?id=1dBVJ7CjhbzO4ED_gISWZo6Tfze_6Q_yK"}]}
                downloadable
                >
                </Viewer>
              </div> */}

              <div onClick={()=>this.setState({viewCv: !this.state.viewCv})} href={'https://i.ibb.co/Pc9htQ4/CV.png'} style={{ textAlign: 'center', cursor: 'pointer' }}>
                <img style={imageStyle} src="https://img.icons8.com/color/512/000000/resume.png"></img>
                <h5>CV.png</h5>
                <Viewer
                visible={this.state.viewCv}
                onClose={() => this.setState({viewCv: false})}
                images={[{src: "https://i.ibb.co/Pc9htQ4/CV.png"}]}
                downloadable
                >
                </Viewer>
              </div>

              {/* <a href={'https://i.ibb.co/Pc9htQ4/CV.png'} target={'_blank'} style={{ textAlign: 'center' }}>
                <img style={imageStyle} src="https://img.icons8.com/color/512/000000/resume.png"></img>
                <h5>CV.png</h5>
              </a> */}
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
