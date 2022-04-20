import React, { Fragment, useState, useEffect } from "react";
import { Navbar, Nav, Button, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";

const NavHeader = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState(false);

  const handleMouseOver = () => {
    setMouse(true);
  };

  const handleMouseOut = () => {
    setMouse(false);
  };

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
        bg={scrollY ? "warning" : "dark"}
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <h3
              className={`text-center  ${
                scrollY ? "text-white" : "text-warning"
              } `}
            >
              <Image
                className="ml-3 pl-3"
                src="/images/logo.jpeg"
                style={{ opacity: "1", width: "70px" }}
              />
              <span className="d-none d-sm-inline-block">
                <b>
                  Alhamd Quran
                  <>Academy</>
                </b>
              </span>
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav ">
            <ViewHeadlineIcon
              className={`${scrollY ? "text-white" : "text-warning"}`}
              style={{ fontSize: "30px" }}
            />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Fragment>
                <Link
                  to="/"
                  style={{ textDecoration: mouse ? "none" : null }}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <p
                    className={`mt-2 mr-2 ${
                      scrollY ? "text-white" : "text-warning"
                    }`}
                  >
                    <b>Home</b>
                  </p>
                </Link>
                <Link
                  to="/fee"
                  style={{ textDecoration: mouse ? "none" : null }}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <p
                    className={`mt-2 mr-2 ${
                      scrollY ? "text-white" : "text-warning"
                    }`}
                  >
                    <b>Fee Chart</b>
                  </p>
                </Link>

                <Link
                  to="/books"
                  style={{ textDecoration: mouse ? "none" : null }}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <p
                    className={`mt-2 mr-2 ${
                      scrollY ? "text-white" : "text-warning"
                    }`}
                  >
                    <b>Books</b>
                  </p>
                </Link>

                <Link
                  to="/admin"
                  style={{ textDecoration: mouse ? "none" : null }}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <p
                    className={`mt-2 mr-2 ${
                      scrollY ? "text-white" : "text-warning"
                    }`}
                  >
                    <b>Admin</b>
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
