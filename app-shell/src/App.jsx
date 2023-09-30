import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from '@mui/material/CssBaseline';

import "./index.css";
import Naviagtion from "./Navigation";

const App = () => (
  <>
    <CssBaseline />
    <Naviagtion />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
