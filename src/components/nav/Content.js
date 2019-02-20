import React, { Fragment } from "react";

import "./Content.css";
import DropMenu from "./DropMenu";

const drawerContent = props => {
  const toggle = props.adjustSettings
    ? {
        height: "100%",
        position: "fixed",
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        overflowX: "hidden",
        transition: "0.5s",
        width: "250px"
      }
    : {
        height: "100%",
        position: "fixed",
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        overflowX: "hidden",
        transition: "0.5s",
        width: 0
      };

  return (
    <Fragment>
      <div id="myNav" className="overlay" style={toggle}>
        <a
          href="void(0)"
          role="button"
          className="closebtn"
          onClick={props.toggleDrawer}
        >
          &times;
        </a>
        <div className="overlay-content">
          <DropMenu
            {...props}
            changeBG={props.changeBG}
            toggleFx={props.toggleFx}
            musicOn={props.musicOn}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default drawerContent;
