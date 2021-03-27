import React, { Fragment, useState, useEffect } from "react";
import { Row, Col,Table,Container } from "react-bootstrap";
import InputArea from "./InputArea";
import LoginAnimation from "../animations/login/LoginAnimation";
import axios from 'axios';
import StudentTable from './StudentTable'

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [students , setStudents] = useState([]);
  useEffect(() => {
    window.load = () => {
      setLoading(false);
    };
  }, []);
useEffect(() => {
    getAllStudents()
},[])
  const getAllStudents = async () => {
    await axios.get("/api/students").then((res) => {
      const projects = res.data;
      setStudents(projects);
    });
  };
  return loading ? (
    <Fragment>
      <Container>
      <Row>
        <Col md='4' lg='4' xl='4' xs='12' sm='12'>
          <LoginAnimation />
        </Col>

        <Col>
          {" "}
          <InputArea setLoading={setLoading} />
        </Col>
      </Row>
      </Container>
    </Fragment>
  ) : (
    <Fragment>
        <Container>
         <Table striped bordered hover size="lg" className='my-3'>
        <thead className='text-center'>
          <tr>
            <th>Name</th>
            <th>Registered on</th>
            <th>Action</th>
          </tr>
        </thead>
        {students.map((student) =>{
        return (<StudentTable studentName={student.studentName} date={student.date }key={student._id} id={student._id}/>)
    })}
     </Table>
     </Container>
    </Fragment>
  );
};

export default Admin;
