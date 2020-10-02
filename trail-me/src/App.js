import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Nav } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import UserLocation from "./components/UserLocation";
import SelectPath from "./components/SelectPath";
import OpenWeather from "./components/OpenWeather";

import "./App.css";

require("dotenv").config();

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Nav>
        <Profile />
        <UserLocation />
        <SelectPath />
      </Nav>
      <OpenWeather />
    </div>
  );
}

export default App;
