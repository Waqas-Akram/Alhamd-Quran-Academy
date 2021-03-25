import React, { Fragment, useState } from "react";
import { Card, Container } from "react-bootstrap";
const BookCard = ({ bookLink, image }) => {
  const [mouse, setMouse] = useState(false);

  const handleMouseOver = () => {
    setMouse(true);
  };

  const handleMouseOut = () => {
    setMouse(false);
  };
  return (
    <Fragment>
      <a
        href={bookLink}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: mouse ? "none" : null }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Card className="my-3 p-2 shadow rounded ">
          <Container>
            <Card.Img variant="top" src={image} className="mt-3 p-2" />
            <Card.Body></Card.Body>
          </Container>
        </Card>
      </a>
    </Fragment>
  );
};

export default BookCard;
