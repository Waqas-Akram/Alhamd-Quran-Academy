import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavHeader from "./components/layout/NavHeader";
import Routing from "./routes/Routing";
import SpinnerAnimation from "./components/animations/spinner/SpinnerAnimation";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.load = setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return loading ? (
    <SpinnerAnimation />
  ) : (
    <Router>
      <Fragment>
        <NavHeader />
        <Routing />
      </Fragment>
    </Router>
  );
}

export default App;
