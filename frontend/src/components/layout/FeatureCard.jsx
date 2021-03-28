import React, { Fragment } from "react";
import { Card, Container } from "react-bootstrap";
import "../../styles/landing.css";
const FeatureCard = ({ title, icon }) => {
  return (
    <Fragment>
      <Card
        className="my-0 p-1 ml-3 welcome border-0 landing"
        style={{ width: "18rem" }}
      >
        <Container>
          <center>
            {icon}
          </center>
          <Card.Body>
            <Card.Title as="div">
              <h3 className="text-center">
                <b>{title}</b>
              </h3>
            </Card.Title>
          </Card.Body>
        </Container>
      </Card>
    </Fragment>
  );
};

export default FeatureCard;
