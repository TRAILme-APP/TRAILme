import React, { Component } from "react";
import { DropdownButton } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import axios from "axios";

var NodeGeocoder = require("node-geocoder");

const googleMapApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

class UserLocation extends Component {
  constructor(props) {
    super();

    this.state = { inputValue: "Austin, TX" };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      this.props.updateLat(latitude);
      this.props.updateLong(longitude);

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

      geocoder.reverse(
        { lat: `${latitude}`, lon: `${longitude}` },
        (err, res) => {
          console.log(
            "RES: ",
            res[0]?.city,
            res[0]?.administrativeLevels?.level1short
          );
          this.setState({
            inputValue:
              res[0]?.city + ", " + res[0]?.administrativeLevels?.level1short,
          });
        }
      );
    });
  }

  handleClick = (e, props) => {
    props.updateDifficulty(e);
    this.getCity();
    this.setState({
      inputValue: e,
    });

    //if "Get my Location" clicked call componentDidMount()
    if (e == "Get my Location") {
      this.componentDidMount();
    }
  };

  getCity = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&appid=6331b558a2d7fa66a892d8e22187e11a`
      )
      .then((response) => {
        console.log(response.data.coord.lat);
      });
  };

  render() {
    return (
      <div className="Location">
        <div id="block2">
          <Form.Group className="LocationForm">
            <Form.Control
              size="md"
              type="text"
              placeholder="Your Location"
              value={this.state.inputValue}
            />
          </Form.Group>
        </div>
      </div>
    );
  }
}

export default UserLocation;
