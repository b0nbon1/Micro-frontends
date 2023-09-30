import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Catalogue from "./Catalogue";

const App = () => (
  <Catalogue />
);
ReactDOM.render(<App />, document.getElementById("app"));
