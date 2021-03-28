import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookCard from "./BookCard";
import BookArray from "./BookArray";
import {Helmet} from 'react-helmet'
const Books = () => {
  return (
    <Fragment>
      <Helmet>
                <meta charSet="utf-8" />
                <meta name='description' content='Read islamic books.'/>
                <title>Books | Alhamd Quran Academy</title>
            </Helmet>
      <Container>
        <Row>
          {BookArray.map((book) => {
            return (
              <Col sm="12" lg="4" md="6" xl="3" key={book.id}>
                <BookCard
                  name={book.name}
                  image={book.image}
                  bookLink={book.bookLink}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Books;
