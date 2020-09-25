import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

class UserLocation extends Component {
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Location
        </Dropdown.Toggle>

        <Dropdown.Menu onClick={() => this.handleClick()}>
          <Dropdown.Item href="#">Austin</Dropdown.Item>
          <Dropdown.Item href="#">Corpus Christi</Dropdown.Item>
          <Dropdown.Item href="#">El Paso</Dropdown.Item>
          <Dropdown.Item href="#">Fort Worth</Dropdown.Item>
          <Dropdown.Item href="#">Dallas</Dropdown.Item>
          <Dropdown.Item href="#">Houston</Dropdown.Item>
          <Dropdown.Item href="#">Lubbock</Dropdown.Item>
          <Dropdown.Item href="#">San Antonio</Dropdown.Item>
          <Dropdown.Item href="#">Waco</Dropdown.Item>
          <Dropdown.Item href="#"> * Use My Location</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default UserLocation;
