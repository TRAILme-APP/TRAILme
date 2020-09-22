import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
