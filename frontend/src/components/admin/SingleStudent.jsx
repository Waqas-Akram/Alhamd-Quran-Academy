import React, { Fragment, useState, useEffect, useRef } from "react";
import { Row, Col, Container, Jumbotron, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactToPrint from "react-to-print";
import PrintIcon from "@material-ui/icons/Print";

import Moment from "react-moment";

const SingleStudent = ({ match }) => {
  const [student, setStudent] = useState({});
  let _id = match.params.id;
  useEffect(() => {
    getSingleStudent();
  });
  const getSingleStudent = async () => {
    await axios.get(`/api/students/${_id}`).then((res) => {
      const studentData = res.data;
      setStudent(studentData);
    });
  };
  const componentRef = useRef();
  return (
    <Fragment>
      <div>
        <Container>
          <Link to="/admin">
            <Button className="mt-4 p-2 mr-3 btn-warning">Go Back</Button>
          </Link>
          <ReactToPrint
            trigger={() => (
              <Button className="mt-4 p-2">
                <PrintIcon />
              </Button>
            )}
            content={() => componentRef.current}
          />

          <Jumbotron className="my-4 bg-white text-dark p-1" ref={componentRef}>
            <Row>
              <Col xs="12" md="6" xl="6" sm="6">
                <div style={{ backgroundColor: "#F7F7F9" }}>
                  <h5 className="p-3">
                    <b>Name</b> : &nbsp;{student.studentName}
                  </h5>
                </div>
              </Col>
              <Col xs="12" md="6" xl="6" sm="6">
                <div style={{ backgroundColor: "#F7F7F9" }}>
                  <h5 className="p-3">
                    <b>Father's Name</b> : &nbsp;{student.fatherName}
                  </h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md="6" xl="6" sm="6">
                <div style={{ backgroundColor: "#F7F7F9" }}>
                  <h5 className="p-3">
                    <b>Mother's Name</b> : &nbsp;{student.motherName}
                  </h5>
                </div>
              </Col>
              <Col xs="12" md="6" xl="6" sm="6">
                <div style={{ backgroundColor: "#F7F7F9" }}>
                  <h5 className="p-3">
                    <b>Birth Date</b> : &nbsp;{student.birthDate}
                  </h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md="6" xl="6" sm="6">
                <div style={{ backgroundColor: "#F7F7F9" }}>
                  <h5 className="p-3">
                    <b>Email</b> : &nbsp;{student.email}
                  </h5>
                </div>
              </Col>
              <Col xs="12" md="6" xl="6" sm="6">
                <div style={{ backgroundColor: "#F7F7F9" }}>
                  <h5 className="p-3">
                    <b>Phone Number </b> : &nbsp;{student.phoneNumber}
                  </h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md="6" xl="6" sm="6">
                <div style={{ backgroundColor: "#F7F7F9" }}>
                  <h5 className="p-3">
                    <b>Applied In</b> : &nbsp;{student.course}
                  </h5>
                </div>
              </Col>
              <Col xs="12" md="6" xl="6" sm="6">
                <div style={{ backgroundColor: "#F7F7F9" }}>
                  <h5 className="p-3">
                    <b>Selected Language</b> : &nbsp;{student.language}
                  </h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md="6" xl="6" sm="6">
                <div style={{ backgroundColor: "#F7F7F9" }}>
                  <h5 className="p-3">
                    <b>Address</b> : &nbsp;{student.address}
                  </h5>
                </div>
              </Col>
              <Col xs="12" md="6" xl="6" sm="6">
                <div style={{ backgroundColor: "#F7F7F9" }}>
                  <h5 className="p-3">
                    <b>Registered on</b> : &nbsp;
                    <Moment format="DD MMMM YYYY">{student.date}</Moment>
                  </h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div style={{ backgroundColor: "#F7F7F9" }}>
                  <h5 className="p-3">
                    <b>Extra Detail</b> : &nbsp;{student.detail}
                  </h5>
                </div>
              </Col>
            </Row>
          </Jumbotron>
        </Container>
      </div>
    </Fragment>
  );
};

export default SingleStudent;
