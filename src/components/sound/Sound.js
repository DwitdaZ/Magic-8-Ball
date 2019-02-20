import React, { Fragment } from "react";

const soundClip = props => {
  return (
    <Fragment>
      <audio autoPlay={props.play} loop={props.repeat} src={props.url} />
    </Fragment>
  );
};

export default soundClip;
