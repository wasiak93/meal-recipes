import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator";

ReactDOM.render(
  <>
    <App />
    <LoadingIndicator />
  </>,
  document.getElementById("root")
);
