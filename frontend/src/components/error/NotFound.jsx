import React, { Fragment } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import ErrorAnimation from "../animations/error/ErrorAnimation";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Fragment>
      <Container>
        <Link to="/">
          <Button className="btn btn-warning my-3">Back to Home</Button>
        </Link>

        <Row>
          <Col>
            <ErrorAnimation />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default NotFound;
