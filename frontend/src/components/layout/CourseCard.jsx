import React, { Fragment } from "react";
import { Card, Container } from "react-bootstrap";
import "../../styles/landing.css";
const CourseCard = ({ name, image, discription }) => {
  return (
    <Fragment>
      <Card
        className="my-0 p-1 ml-3 welcome border-0 landing"
        style={{ width: "18rem" }}
      >
        <Container>
          <center>
            <Card.Img src={image} style={{ width: "100px" }} />
          </center>
          <Card.Body>
            <Card.Title as="div">
              <h3 className="text-left">
                <b>{name}</b>
              </h3>
            </Card.Title>
            <Card.Text as="div">{discription}</Card.Text>
          </Card.Body>
        </Container>
      </Card>
    </Fragment>
  );
};

export default CourseCard;
