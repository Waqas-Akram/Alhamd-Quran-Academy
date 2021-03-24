import React, { Fragment } from "react";
import { Card, Container } from "react-bootstrap";
const FeeCard = ({ animation, charges, duration }) => {
  return (
    <Fragment>
      <Card className="my-3 p-3 shadow rounded ">
        <Container>
          {animation}
          <Card.Body>
            <Card.Title as="div">
              <h1 className="text-center">{charges}</h1>
            </Card.Title>
            <Card.Text as="div">Duration : {duration}</Card.Text>
          </Card.Body>
        </Container>
      </Card>
    </Fragment>
  );
};

export default FeeCard;
