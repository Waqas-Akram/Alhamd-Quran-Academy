import React, { Fragment, useState, useEffect } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";

const NavHeader = () => {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);
  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={scrollY ? "warning" : "white"}
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <h2
              className={`text-center ${
                scrollY ? "text-white" : "text-warning"
              } `}
            >
              <b>
                Alhamd Quran
                <br /> Academy
              </b>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav ">
            <ViewHeadlineIcon
              className={`${scrollY ? "text-white" : "text-warning"}`}
              style={{ fontSize: "60px" }}
            />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Fragment>
                <Link to="/">
                  <p
                    className={`mt-2 mr-2 ${
                      scrollY ? "text-white" : "text-warning"
                    }`}
                  >
                    <b>Home</b>
                  </p>
                </Link>
                <Link to="/fee">
                  <p
                    className={`mt-2 mr-2 ${
                      scrollY ? "text-white" : "text-warning"
                    }`}
                  >
                    <b>Fee Chart</b>
                  </p>
                </Link>

                <Link to="/books">
                  <p
                    className={`mt-2 mr-2 ${
                      scrollY ? "text-white" : "text-warning"
                    }`}
                  >
                    <b>Books</b>
                  </p>
                </Link>
                <Link to="/contact">
                  <p
                    className={`mt-2 mr-2 ${
                      scrollY ? "text-white" : "text-warning"
                    }`}
                  >
                    <b>Contact</b>
                  </p>
                </Link>
                <Link to="/admission">
                  <Button
                    className={`${
                      scrollY ? "bg-white" : "bg-warning"
                    } mr-1  mt-0 border-0  ${
                      scrollY ? "text-warning" : "text-white"
                    }`}
                  >
                    <b>Register Now</b>
                  </Button>
                </Link>
              </Fragment>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};
export default NavHeader;
