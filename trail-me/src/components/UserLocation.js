import React, { Component } from "react";
import { DropdownButton } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

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

  handleClick = (e) => {
    console.log("clicked!", e);
    this.setState({
      inputValue: e,
    });

    //if "Get my Location" clicked call componentDidMount()
    if (e == "Get my Location") {
      this.componentDidMount();
    }
  };

  render() {
    return (
      <div className="Location">
        <div id="block1">
          {" "}
          <Dropdown className="LocationDropdown">
            {/* <Dropdown.Menu onClick={(e) => this.handleClick()}> */}
            <DropdownButton
              variant="success"
              id="dropdown-basic"
              onSelect={(e) => this.handleClick(e)}
            >
              <Dropdown.Item href="#" eventKey="Austin">
                Austin
              </Dropdown.Item>
              <Dropdown.Item href="#" eventKey="Corpus Christi">
                Corpus Christi
              </Dropdown.Item>
              <Dropdown.Item href="#" eventKey="El Paso">
                El Paso
              </Dropdown.Item>
              <Dropdown.Item href="#" eventKey="Fort Worth">
                Fort Worth
              </Dropdown.Item>
              <Dropdown.Item href="#" eventKey="Dallas">
                Dallas
              </Dropdown.Item>
              <Dropdown.Item href="#" eventKey="Houston">
                Houston
              </Dropdown.Item>
              <Dropdown.Item href="#" eventKey="Lubbock">
                Lubbock
              </Dropdown.Item>
              <Dropdown.Item href="#" eventKey="San Antonio">
                San Antonio
              </Dropdown.Item>
              <Dropdown.Item href="#" eventKey="Waco">
                Waco
              </Dropdown.Item>
              <Dropdown.Item href="#" eventKey="Get my Location">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-geo-alt-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                </svg>
                Get My Location
              </Dropdown.Item>
            </DropdownButton>
          </Dropdown>
        </div>
        <div id="block2">
          <Form.Group className="LocationForm">
            <Form.Control
              size="lg"
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
