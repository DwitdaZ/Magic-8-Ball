import React, { Component, Fragment } from "react";
import "./App.css";

import { precognitions } from "./Data";
import Particles from "./ParticleBG";
import { Container, Row, Col } from "react-bootstrap";
import SoundClip from "./sound/Sound";
import ContentBar from "./nav/Navbar";

import logo from "../assets/magic8ballLOGO.png";
import bgfile from "../assets/eightBall.mp3";
import clickfile from "../assets/eightBallTouch.mp3";
import shakefile from "../assets/eightBallShake.mp3";
import ball from "../assets/blankBall.png";

export default class App extends Component {
  state = {
    response: {
      frontcolor: "red",
      backcolor: "whitesmoke",
      txtresponse: "Click to Shake"
    },
    reading: false,
    isOn: true,
    btnText: "Off",
    fxOn: true,
    fxBtn: "Off",
    press: false,
    adjustSettings: false,
    bgSelect: 1
  };

  componentWillMount() {
    document.body.style.backgroundImage =
      "radial-gradient(circle, #ff33cc, #ad1fd8, #000099, #001f5c)";
  }

  handleBallShake = evt => {
    evt.preventDefault();
    this.setState({ reading: !this.reading, press: !this.state.press });
    setTimeout(() => {
      const reading =
        precognitions[Math.floor(Math.random() * precognitions.length)];
      const { txtColor, bgColor, text } = reading;

      this.setState({
        response: {
          frontcolor: txtColor,
          backcolor: bgColor,
          txtresponse: text
        },
        reading: !this.state.reading,
        press: !this.state.press
      });
    }, 1200);
  };

  toggleContentDrawer = evt => {
    evt.preventDefault();
    this.setState({ adjustSettings: !this.state.adjustSettings });
  };

  toggleMusicHandler = evt => {
    evt.preventDefault();
    let status = !this.state.isOn ? "Off" : "On";
    this.setState({
      isOn: !this.state.isOn,
      btnText: status
    });
  };

  toggleSoundHamdler = evt => {
    evt.preventDefault();
    let status = !this.state.fxOn ? "Off" : "On";
    this.setState({
      fxOn: !this.state.fxOn,
      fxBtn: status
    });
  };

  backgroundSelectHandler = bg => {
    switch (bg) {
      case 2:
        document.body.style.backgroundImage =
          "linear-gradient(#000066, #0033cc, #000066)";
        break;
      case 3:
        document.body.style.backgroundImage =
          "radial-gradient(circle, #ad1fd8, #660066,  #000066, #660066)";
        break;
      default:
        document.body.style.backgroundImage =
          "radial-gradient(circle, #ff33cc, #ad1fd8, #000099, #001f5c)";
        break;
    }

    this.setState({ bgSelect: bg });
  };

  render() {
    const { frontcolor, backcolor, txtresponse } = this.state.response;

    const animate = this.state.reading ? "shaking textVapor" : null;

    const bgAudio = this.state.isOn ? (
      <SoundClip play="{true}" repeat="{true}" url={bgfile} />
    ) : null;

    const touch =
      this.state.press && this.state.fxOn ? (
        <SoundClip play="{true}" url={clickfile} />
      ) : null;

    const shake =
      this.state.press && this.state.fxOn ? (
        <SoundClip play="{true}" url={shakefile} />
      ) : null;

    return (
      <Fragment>
        {bgAudio}
        {touch}
        {shake}
        <ContentBar
          {...this.state}
          toggleDrawer={this.toggleContentDrawer}
          switchMusicOn={this.toggleMusicHandler}
          switchfxOn={this.toggleSoundHamdler}
          changeBG={this.backgroundSelectHandler}
        />
        <Container className="App">
          <Row>
            <Col className="text-center" sm={{ span: 8, offset: 2 }}>
              <img className="img-fluid" src={logo} alt="s8b logo" />
            </Col>
          </Row>
          <Row id="ballDiv" className="justify-content-center">
            <Col id="ballBody" className={animate}>
              <img src={ball} id="ballImg" className="d-block" alt="/" />
              <Col
                id="ballCenter"
                className="centered"
                style={{ backgroundColor: backcolor }}
                onClick={this.handleBallShake}
              >
                <Col id="ballText" className="text-center">
                  <Col>
                    <span style={{ color: frontcolor }}>{txtresponse}</span>
                  </Col>
                </Col>
              </Col>
            </Col>
          </Row>
          <Particles />
        </Container>
      </Fragment>
    );
  }
}
