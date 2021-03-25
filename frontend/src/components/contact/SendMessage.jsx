import React, { Fragment, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

const SendMessage = () => {
  const [loading, setLoading] = useState(false);
  const alertSuccessNotify = () =>
    Swal.fire("Successfully Sent", "", "success");
  const alertErrorNotify = () =>
    Swal.fire("Message Not Sent", "Check your internet connectivity", "error");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      message: Yup.string().required("You cannot send empty message"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(values);
        const res = await axios.post("/api/sendmessage/send", body, config);
        if (res.status === 200) {
          setLoading(false);
          alertSuccessNotify();
        }
        resetForm({ values: "" });
      } catch (error) {
        console.error(error.message);
        if (error) {
          alertErrorNotify();
        }
      }
    },
  });
  return (
    <Fragment>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            className=" bg-dark text-white"
            placeholder="Your Name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            autoComplete="off"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-danger">{formik.errors.name}</div>
          ) : null}
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Control
            type="email"
            placeholder="Your Email"
            className=" bg-dark text-white"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            autoComplete="off"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}
        </Form.Group>
        <Form.Group
          controlId="exampleForm.ControlTextarea1 "
          className=" bg-dark text-white"
        >
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            className=" bg-dark text-white"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            autoComplete="off"
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-danger">{formik.errors.message}</div>
          ) : null}
        </Form.Group>
        <Form.Group>
          <Row>
            <Col xs="12" lg="8" md="8" xl="8">
              <Button
                className="btn-block p-3 p-lg-2 btn-warning"
                type="submit"
                disabled={loading ? true : false}
              >
                {loading ? <b>Sending....</b> : <b>Send</b>}
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Fragment>
  );
};

export default SendMessage;
