import React, { Fragment } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

const dropmenu = props => {
  return (
    <Fragment>
      <Dropdown>
        <Dropdown.Toggle
          variant="outline-secondary"
          id="dropdown-custom-components"
        >
          <a>
            <span className="fas fa-cog pr-2" />
            Settings
          </a>
        </Dropdown.Toggle>

        <Dropdown.Menu className="text-center">
          <Dropdown.Item eventKey="1">Music</Dropdown.Item>
          <Button onClick={props.musicOn}>{props.btnText}</Button>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="2">SoundfX</Dropdown.Item>
          <Button onClick={props.toggleFx}>{props.fxBtn}</Button>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="3">Background</Dropdown.Item>
          <ButtonToolbar>
            <ToggleButtonGroup
              size="sm"
              className="mx-3"
              type="radio"
              name="options"
              onChange={props.changeBG}
              defaultValue={props.bgSelect}
            >
              <ToggleButton value={1}>Opt 1</ToggleButton>
              <ToggleButton value={2}>Opt 2</ToggleButton>
              <ToggleButton value={3}>Opt 3</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Dropdown.Menu>
      </Dropdown>
    </Fragment>
  );
};

export default dropmenu;
