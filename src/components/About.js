import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

export class About extends Component {

  render() {
    return (
      <ScrollableAnchor id={"aboutComponent"}>
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
              About Me
            </div>
          </div>
          <div style={contentStyle}>
            <div>
              <img src={this.props.logo} className="image-profile" alt="logo" />
            </div>
            <div style={textContentStyle}>
              <h1>Hi, I'm Fadil!</h1>
              <br />
              <p>
                Self taught Full-stack Web Developer. Javascript lover. Coffee and Milk
                Addict
              </p>
              <hr />
              <p>
                full name is <b>Muhammad Fadhilah Mulyana</b>. My stack is WAMP,
                but still excited with others like React, React Native, Vue and
                Laravel.
              </p>
              <p>
                I'm always eager to learn something new, and breath decent
                technology everyday with good architecture to
                solving problems.
              </p>
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
  flexWrap: "wrap",
  alignItems: "center"
  // flexDirection: 'column'
};

const textContentStyle = {
  alignItems: "space-around",
  flex: 1,
  padding: "0 25px",
  fontSize: "18px",
  textAlign: "left"
};

export default About;
