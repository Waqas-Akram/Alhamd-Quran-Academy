import React, { Fragment } from "react";
import { Form, Row, Col, Container, Button ,Jumbotron} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2'


const InputArea = ({ setLoading }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      if (values.email !== "alhamdquranacademy2526@gmail.com") {
        Swal.fire({

          title:"Incorrect Email",
          text:"If you are not an admin of this site , Do'nt do that again",
          icon:'warning'
        })
      } else if (values.password !== "Saleem2526") {
        Swal.fire({

          title:"Wrong Password ",
          icon:'error'
        })
      } else {
        setLoading(false);
      }
    },
  });
  return (
    <Fragment>
      <Container>
          <Jumbotron className='my-3 bg-white shadow'>
        <Row>
       
          <Col>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group>
                    <Jumbotron className='bg-warning p-1 text-center text-white'>
                        <h4><b>Login as Admin</b></h4>
                    </Jumbotron>
                </Form.Group>
                    <Form.Group controlId="ControlInput1">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
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
              <Form.Group controlId="ControlInput2">
                <Form.Control
                  type="password"
                  placeholder="Admin Password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  autoComplete="off"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
              </Form.Group>
              
              
              <Button
                className=" btn-warning"
                type="submit"
              >
                Login Now
              </Button>
            </Form>
          </Col>
         
        </Row>
        </Jumbotron>
      </Container>
    </Fragment>
  );
};

// InputArea.PropTypes = {
//   setLoading: PropTypes.func.isRequired,
// };

export default InputArea;
