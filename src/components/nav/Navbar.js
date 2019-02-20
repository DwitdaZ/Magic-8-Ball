import React, { Fragment } from "react";

import Navbar from "react-bootstrap/Navbar";
import DrawerContent from "./Content";

const contentbar = props => {
  const drawer = props.adjustSettings ? (
    <DrawerContent
      {...props}
      changeBG={props.changeBG}
      toggleFx={props.switchfxOn}
      musicOn={props.switchMusicOn}
    />
  ) : null;

  return (
    <Fragment>
      <Navbar collapseOnSelect expand="true" variant="dark">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={props.toggleDrawer}
        />
        <Navbar.Collapse id="responsive-navbar-nav" />
      </Navbar>
      {drawer}
    </Fragment>
  );
};

export default contentbar;
