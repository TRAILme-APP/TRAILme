import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

var NodeGeocoder = require("node-geocoder");

const googleMapApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

class UserLocation extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapApiKey}`;
      let response = await fetch(apiUrl);
      let data = await response.json();

      var options = {
        provider: "google",
        httpAdapter: "https",
        apiKey: `${googleMapApiKey}`,
        formatter: "json",
      };

      var geocoder = NodeGeocoder(options);

      geocoder.reverse({ lat: `${latitude}`, lon: `${longitude}` }, function (
        err,
        res
      ) {
        console.log(res);
      });

      //put userCityState text in form
    });
  }

  render() {
    return (
      <div className="Location">
        <Dropdown className="LocationDropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Cities
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

        <Form.Group className="LocationForm">
          <Form.Control size="lg" type="text" placeholder="Your Location" />
        </Form.Group>
      </div>
    );
  }
}

export default UserLocation;
