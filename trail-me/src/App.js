import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
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
      <Profile />
      <Navbar />
      <Hero />
      <UserLocation />
      <SelectPath />
      <OpenWeather />
    </div>
  );
}

export default App;
