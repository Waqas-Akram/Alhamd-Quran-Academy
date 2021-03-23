import React, { Fragment } from "react";
import { Row, Col, Container, Jumbotron, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

toast.configure();

const AdmissionForm = () => {
  const notify = () => {
    toast("Please Wait until you get success message", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
    });
  };
  const alertSuccessNotify = () =>
    Swal.fire({
      title: "Submitted Successfully",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: `Check Fee Structure`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        window.location.href = "/fee";
      } else if (result.isDenied) {
        window.location.href = "/admission";
      }
    });
  const alertErrorNotify = () =>
    Swal.fire(
      "Form Not Submitted",
      "Check your internet connectivity",
      "error"
    );

  const formik = useFormik({
    initialValues: {
      studentName: "",
      fatherName: "",
      motherName: "",
      birthDate: "",
      phoneNumber: "",
      course: "",
      email: "",
      address: "",
      detail: "",
    },
    validationSchema: Yup.object({
      studentName: Yup.string().required("Student Name is required"),
      fatherName: Yup.string().required("Father name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      motherName: Yup.string().required("Mother name is required"),
      birthDate: Yup.string().required("Birth Date is required"),
      phoneNumber: Yup.string().required("Phone Number is required"),
      course: Yup.string().required("Course selection is mendatory"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        notify();
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(values);
        await axios.post("/api/contact/send", body, config);
        const res = await axios.post("/api/students", body, config);

        if (res.status === 200) {
          alertSuccessNotify();
        }

        resetForm({ values: "" });
      } catch (error) {
        alertErrorNotify();
      }
    },
  });
  return (
    <Fragment>
      <Container>
        <Jumbotron className="bg-warning shadow my-4">
          <Row>
            <Col sm="4" lg="4" md="4">
              <h1 className="text-center text-white">
                <b>Learn Quran with us</b>
              </h1>
              <div className="bg-white p-4 my-3 ">
                <h2 className=" text-warning text-center ">
                  <b>Register Now</b>
                </h2>
              </div>
            </Col>
            <Col>
              <Jumbotron className="bg-white shadow rounded p-3 ">
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group controlId="formBasicStudentName">
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter student name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.studentName}
                      name="studentName"
                      autoComplete="off"
                    />
                    {formik.touched.studentName && formik.errors.studentName ? (
                      <div className="text-danger">
                        {formik.errors.studentName}
                      </div>
                    ) : null}
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group controlId="formBasicFatherName">
                        <Form.Label>Father's Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your father name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.fatherName}
                          name="fatherName"
                          autoComplete="off"
                        />
                        {formik.touched.fatherName &&
                        formik.errors.fatherName ? (
                          <div className="text-danger">
                            {formik.errors.fatherName}
                          </div>
                        ) : null}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formBasicMotherName">
                        <Form.Label>Mother's Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your mother name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.motherName}
                          autoComplete="off"
                          name="motherName"
                        />
                        {formik.touched.motherName &&
                        formik.errors.motherName ? (
                          <div className="text-danger">
                            {formik.errors.motherName}
                          </div>
                        ) : null}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <Form.Group controlId="formBasicDOB">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Enter email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.birthDate}
                          autoComplete="off"
                          name="birthDate"
                        />
                        {formik.touched.birthDate && formik.errors.birthDate ? (
                          <div className="text-danger">
                            {formik.errors.birthDate}
                          </div>
                        ) : null}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          autoComplete="off"
                          name="email"
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="text-danger">
                            {formik.errors.email}
                          </div>
                        ) : null}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formBasicPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Add phone number"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.phoneNumber}
                          autoComplete="off"
                          name="phoneNumber"
                        />
                        {formik.touched.phoneNumber &&
                        formik.errors.phoneNumber ? (
                          <div className="text-danger">
                            {formik.errors.phoneNumber}
                          </div>
                        ) : null}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group controlId="ControlSelect1">
                    <Form.Label>Select Course</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.course}
                      autoComplete="off"
                      name="course"
                    >
                      <option className="text-muted" defaultValue>
                        {" "}
                        choose your desired course
                      </option>
                      <option>Madni Qaida</option>
                      <option>Nazra Quran Pak</option>
                      <option>Hifz-e-Quran Pak</option>
                      <option>Namaz</option>
                    </Form.Control>
                    {formik.touched.course && formik.errors.course ? (
                      <div className="text-danger">{formik.errors.course}</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Add your address"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.address}
                      autoComplete="off"
                      name="address"
                    />
                    {formik.touched.address && formik.errors.address ? (
                      <div className="text-danger">{formik.errors.address}</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="formBasicDetail">
                    <Form.Label>
                      Extra Detail{" "}
                      <span className="text-muted">(optional)</span>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      placeholder="Enter some extra detail"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.detail}
                      autoComplete="off"
                      name="detail"
                    />
                  </Form.Group>

                  <Button variant="warning" type="submit">
                    Register
                  </Button>
                </Form>
              </Jumbotron>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </Fragment>
  );
};

export default AdmissionForm;
