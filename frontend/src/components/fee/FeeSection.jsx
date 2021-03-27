import React, { Fragment } from "react";
import FeeArray from "./FeeArray";
import FeeCard from "./FeeCard";
import { Row, Col, Container, Jumbotron } from "react-bootstrap";
import "./style.css";

const FeeSection = () => {
  return (
    <Fragment>
      <Container>
        <Jumbotron className="mt-3 bg-dark p-1 text-warning text-center">
          <h2 className="mt-1">
            <b>Fee Structure</b>
          </h2>
        </Jumbotron>
        <Row>
          {FeeArray.map((fee) => {
            return (
              <Col sm="12" lg="4" md="6" xl="3" key={fee.id}>
                <FeeCard
                  animation={fee.animation}
                  charges={fee.charges}
                  duration={fee.duration}
                />
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col>
            <Jumbotron className="mt-3 bg-dark p-1 text-warning ">
              <h3 className="text-center mt-1">
                <b>How to Pay</b>
              </h3>
            </Jumbotron>
            <div>
              <h4>
                <ul className="list-styling">
                  <li className="decoration">
                    For payment just stay connected with your instructor.{" "}
                  </li>
                  <li className="decoration">
                    Connect with us on our provided contact
                  </li>
                  <li className="decoration">We will guide you how to pay.</li>
                </ul>
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default FeeSection;
