import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavHeader from "./components/layout/NavHeader";
import Routing from "./routes/Routing";
import SpinnerAnimation from "./components/animations/spinner/SpinnerAnimation";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";
import ScrollToTopButton from "./components/scroll/ScrollToTopButton";
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
        <ScrollToTop />
        <Routing />
        <ScrollToTopButton />
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
