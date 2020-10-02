import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import OpenWeather from "./components/OpenWeather";

import SelectPath from "./components/SelectPath";

import UserLocation from "./components/UserLocation";

import Result from "./components/Diffcultylevel/Result"

import { Nav } from "react-bootstrap";

require("dotenv").config();

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <Navbar />
      <Nav className="p-3">
        <UserLocation />
        <SelectPath />
        <Profile />
      </Nav>
      <OpenWeather />
      <Result />


    </div>
  );
}

export default App;
