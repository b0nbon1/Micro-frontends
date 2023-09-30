import React from "react";
import ReactDOM from "react-dom";
import Box from '@mui/material/Box';

import "./index.css";

const App = () => {
  const [open, setOpen] = React.useState(true);
  return (
  <Box>
    <div>Hello world</div>
  </Box>
)};
ReactDOM.render(<App />, document.getElementById("app"));
