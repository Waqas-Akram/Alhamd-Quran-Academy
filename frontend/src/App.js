import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavHeader from "./components/layout/NavHeader";
import Routing from "./routes/Routing";

function App() {
  return (
    <Router>
      <Fragment>
        <NavHeader />
        <Routing />
      </Fragment>
    </Router>
  );
}

export default App;
