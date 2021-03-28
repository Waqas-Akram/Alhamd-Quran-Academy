import React, { Fragment } from "react";
import { Row, Col, Container, Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/landing.css";
import courseArray from "./CourseArray";
import CourseCard from "./CourseCard";
import featureArray from "./FeatureArray";
import FeatureCard from "./FeatureCard";

const Landing = () => {
  return (
    <Fragment>
      <Jumbotron className="bg-dark text-white">
        <Container>
          <Row>
            <Col>
              <h1>خَيْرُكُمْ مَنْ تَعَلَّمَ اْلقُرْآنَ وَعَلَّمَهُ</h1>
              <h2>
                The best of you are those who learn the Qur'an and teach it
              </h2>
            </Col>
            <Col lg="4" md="4" sm="4">
              <h1>
                <b>Want to Learn Quran Pak ?</b>
              </h1>
              <p>
                <b>
                  Then why are you waiting .. ?<br />
                  Join right now Alhamd Academy{" "}
                </b>
              </p>
              <Link to="/admission">
                <Button className="btn btn-warning pr-3">
                  <b>Apply Now</b>
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container>
        <Jumbotron className="bg-white welcome my-4">
          <h1 className=" text-lg-center text-md-center">
            <span>
              {" "}
              <b>Welcome to Alhamd Quran Academy</b>
            </span>
          </h1>
          <p className=" text-lg-center text-md-center">
            A warmly welcomed to our new students.Huge thanks for taking the
            time to visit Alhamd Quran Academy. We really appreciate you being
            here and hope you enjoy exploring all the resources we have provided
            to help you engage the Quran as well as Islamic teachings on daily
            basis.
          </p>
        </Jumbotron>
        <Jumbotron className="mt-3 bg-dark p-1 text-warning ">
          <h3 className="text-center mt-1">
            <b>Courses Offered</b>
          </h3>
        </Jumbotron>
        <Row>
          {courseArray.map((course) => {
            return (
              <Col sm="12" lg="4" md="6" xl="3" key={course.id}>
                <CourseCard
                  name={course.name}
                  discription={course.discription}
                  image={course.image}
                />
              </Col>
            );
          })}
        </Row>
        <Jumbotron className="mt-3 bg-dark p-1 text-warning ">
          <h3 className="text-center mt-1">
            <b>Why Us ?</b>
          </h3>
        </Jumbotron>
        <Row>
          {featureArray.map((feature) => {
            return (
              <Col sm="12" lg="4" md="6" xl="4" key={feature.id}>
                <FeatureCard title={feature.title} icon={feature.icon} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Landing;
