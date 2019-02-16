import React, { Component, Fragment } from "react";
import "./App.css";

import Particles from "./ParticleBG";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assests/magic8ballLOGO.png";

const precognitions = [
  {
    txtColor: "yellow",
    bgColor: "red",
    text: "don't count on it"
  },
  {
    txtColor: "white",
    bgColor: "red",
    text: "my reply is no"
  },
  {
    txtColor: "black",
    bgColor: "red",
    text: "my sources say no"
  },
  {
    txtColor: "white",
    bgColor: "red",
    text: "outlook not so good"
  },
  {
    txtColor: "black",
    bgColor: "red",
    text: "very doubtful"
  },

  {
    txtColor: "black",
    bgColor: "green",
    text: "yes"
  },
  {
    txtColor: "yellow",
    bgColor: "green",
    text: "it is certain"
  },
  {
    txtColor: "white",
    bgColor: "green",
    text: "without a doubt"
  },
  {
    txtColor: "black",
    bgColor: "green",
    text: "yes, definitely"
  },
  {
    txtColor: "yellow",
    bgColor: "green",
    text: "you may rely on it"
  },
  {
    txtColor: "white",
    bgColor: "green",
    text: "as i see it, yes"
  },
  {
    txtColor: "black",
    bgColor: "green",
    text: "most likely"
  },
  {
    txtColor: "yellow",
    bgColor: "green",
    text: "outlook good"
  },
  {
    txtColor: "white",
    bgColor: "green",
    text: "signs point to yes"
  },

  {
    txtColor: "purple",
    bgColor: "#ffe700",
    text: "good luck"
  },
  {
    txtColor: "orange",
    bgColor: "#001eff",
    text: "reply hazy, try again"
  },
  {
    txtColor: "black",
    bgColor: "orange",
    text: "ask again later"
  },
  {
    txtColor: "#f000ff",
    bgColor: "#001eff",
    text: "better not tell you now"
  },
  {
    txtColor: "white",
    bgColor: "#74ee15",
    text: "concentrate and ask again"
  }
];

export default class App extends Component {
  state = {
    response: {
      frontcolor: "red",
      backcolor: "whitesmoke",
      txtresponse: "Click to Shake"
    },
    reading: false
  };

  handleBallShake = evt => {
    evt.preventDefault();
    this.setState({ reading: !this.reading });
    setTimeout(() => {
      const shakeResponse = arr =>
        precognitions[Math.floor(Math.random() * precognitions.length)];

      const reading = shakeResponse(precognitions);
      const { txtColor, bgColor, text } = reading;

      this.setState({
        response: {
          frontcolor: txtColor,
          backcolor: bgColor,
          txtresponse: text
        },
        reading: !this.state.reading
      });
    }, 1000);
  };

  render() {
    const { frontcolor, backcolor, txtresponse } = this.state.response;
    const animate = this.state.reading
      ? "centered shaking textVapor"
      : "centered";

    return (
      <Fragment>
        <br />
        <Row className="pt-3">
          <Col className="text-center" xs={{ span: 8, offset: 2 }}>
            <img className="img-fluid" src={logo} alt="s8b logo" />
          </Col>
        </Row>
        <Container className="App">
          <Col id="ballBody" className={animate}>
            <Col
              id="ballCenter"
              className="centered"
              style={{ backgroundColor: backcolor }}
              onClick={this.handleBallShake}
            >
              <Col id="ballText" className="centered text-center">
                <Col>
                  <span style={{ color: frontcolor }}>{txtresponse}</span>
                </Col>
              </Col>
            </Col>
          </Col>
          <Particles />
        </Container>
      </Fragment>
    );
  }
}
