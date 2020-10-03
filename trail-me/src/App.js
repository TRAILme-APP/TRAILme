import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Nav } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import UserLocation from "./components/UserLocation";
import SelectPath from "./components/SelectPath";
import RangeInput from "./components/RangeInput";
import OpenWeather from "./components/OpenWeather";
import Result from "./components/DifficultyLevel/Result";

import "./App.css";

require("dotenv").config();

function App() {
  const { isLoading } = useAuth0();

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [range, setRange] = useState(0);
  const [difficulty, setDifficulty] = useState("");

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Nav>
        <Profile />
        <UserLocation updateLat={setLat} updateLong={setLong} />
        <SelectPath updateDifficulty={setDifficulty} />
        <RangeInput updateRange={setRange} />
      </Nav>
      {lat && long && difficulty && range > 0 && (
        <OpenWeather submitLat={lat} submitLong={long} submitRange={range} />
      )}

      {lat && long && difficulty && range > 0 && (
        <Result
          key={range + difficulty}
          submitLat={lat}
          submitLong={long}
          submitRange={range}
        />
      )}
    </div>
  );
}

export default App;
