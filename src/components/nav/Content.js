import React, { Fragment } from "react";
import { open, close } from "../Data";

import "./Content.css";
import DropMenu from "./DropMenu";

const drawerContent = props => {
  const toggle = props.adjustSettings ? open : close;

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
