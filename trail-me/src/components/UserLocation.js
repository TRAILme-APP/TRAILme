import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Geocode from "react-geocode";

var NodeGeocoder = require("node-geocoder");
// import { Geocoder } from "node-geocoder";

let autoComplete;

function SearchLocationInput(props) {
  const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
      script.onreadystatechange = function () {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      { types: ["(cities)"], componentRestrictions: { country: "us" } }
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery)
    );
  }

  async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    console.log("this is query: ", query);

    updateQuery(query);
    console.log("This is the addressObject: ", addressObject);

    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

    Geocode.fromAddress(addressObject.formatted_address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log("LAT LONG DROP DOWN: ", lat, lng);
        props.updateLat(lat);
        props.updateLong(lng);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_HIKING_PROJECT_API_KEYX}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );

    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log("LAT LONG RETURNED: ", latitude, longitude);

      props.updateLat(latitude);
      props.updateLong(longitude);

      console.log("PROPS PASSED IN: ", props);

      const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
      let response = await fetch(apiUrl);
      let data = await response.json();

      console.log("DATA TO JSON: ", data);

      var options = {
        provider: "google",
        httpAdapter: "https",
        apiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
        formatter: "json",
      };

      var geocoder = NodeGeocoder(options);

      geocoder.reverse(
        { lat: `${latitude}`, lon: `${longitude}` },
        (err, res) => {
          console.log(
            "RESSSS: ",
            res[0]?.city,
            res[0]?.administrativeLevels?.level1short
          );
          setQuery(
            res[0]?.city + ", " + res[0]?.administrativeLevels?.level1short
          );
        }
      );
    });
  }, []);

  return (
    <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Enter a City"
        value={query}
      />
    </div>
  );
}

export default SearchLocationInput;
