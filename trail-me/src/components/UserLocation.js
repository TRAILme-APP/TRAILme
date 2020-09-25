import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

const googleMapApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

class UserLocation extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

      const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapApiKey}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => console.log("This is your data", data));

      //get user city and state from JSON
      // userCityState =

      //put userCityState text in form
    });
  }

  render() {
    return (
      <div>
        <Form.Group>
          <Form.Control size="lg" type="text" placeholder="User Location" />
        </Form.Group>

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
      </div>
    );
  }
}

export default UserLocation;
