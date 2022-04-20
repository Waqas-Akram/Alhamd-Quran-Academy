import React from "react";
import { Row, Col, Container, Jumbotron, Button, Image } from "react-bootstrap";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";
import SendMessage from "../contact/SendMessage";
import "../../styles/contact-style.css";

const Footer = () => {
  return (
    <div>
      <Jumbotron className="bg-dark text-white my-0">
        <Container>
          <Row>
            <Col md="6">
              <Row>
                <Col md="6">
                  <div className="logo-part">
                    <center>
                      <Image
                        src="/images/profile.jpeg"
                        // roundedCircle
                        className="profile-image mt-0"
                      />
                    </center>
                    <h5>
                      <b>Qari Mohammed Raza </b>
                    </h5>

                    <p>
                      <PhoneAndroidIcon className="text-danger" /> +923262641418
                    </p>
                    <p>
                      <WhatsAppIcon className="text-success" /> +923262641418
                    </p>
                    <p>
                      <EmailIcon className="text-primary" />{" "}
                      <a href="razaonline2526@gmail.com">
                        &nbsp;razaonline2526@gmail.com
                      </a>
                    </p>
                    <p>
                      <Image src="/images/skype.png" width="25px" />{" "}
                      Mohammed Raza2525
                    </p>
                  </div>
                </Col>
                <Col className=" px-4">
                  <h2 className="text-center mt-2">
                    <b> About Academy</b>
                  </h2>
                  <p>
                    We will give you the best learning in this academy . If you
                    are afraid that this would be scam than never think about
                    this because we will provide you best Online Quran Education
                    in our Academy. if You are interested than
                    <br />
                    <Link to="/admission">
                      <Button className="btn btn-warning">Register Now</Button>
                    </Link>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <Row>
                <Col md="6" className=" px-4">
                  <h2 className="text-center  mt-2">
                    {" "}
                    <b>Quick Links</b>
                  </h2>
                  <Row>
                    <Col md="6">
                      <ul style={{ listStyleType: "none" }}>
                        <li>
                          {" "}
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/books">Books</Link>
                        </li>
                        <li>
                          <Link to="/fee"> Fee </Link>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <h2 className="mt-2">
                    <b>Leave us a Message</b>
                  </h2>
                  <SendMessage />
                  <h2 className="mt-2 text-center">
                    <b>Follow us</b>
                  </h2>
                  {/* <center>
                    <a
                      href="https://web.facebook.com/saleem.qadri.31"
                      target="_blank"
                      rel=" noreferrer"
                    >
                      <FacebookIcon className="text-primary" />
                    </a>
                    <a
                      href="https://www.instagram.com/qarisaleemraza/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramIcon className="text-danger" />
                    </a>
                  </center> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
    // </div>
  );
};

export default Footer;
