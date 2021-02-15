import React, { useState } from 'react';
import {Form, Button, Table, Container, Col} from "react-bootstrap";

const Todolist = () => {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState({
    description: '',
    date: '',
  })

  const inputChanged = (event) => {
    setToDo({...toDo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setToDos([...toDos, toDo]);
    setToDo({
      description: '',
      date: '',
    })
  }

  return (
    <div className="mt-5">
      <Container className="mt-5">
        <Container className="block-example border border-primary p-3 rounded mb-0">
          <Form onSubmit={addTodo} inline >
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Group>
                  <Form.Label>Description: </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter description"
                    name='description'
                    value={toDo.description}
                    onChange={inputChanged}
                    className="ml-2"
                    required
                  />
                </Form.Group>
              </Col>

              <Col xs="auto">
                <Form.Group>
                  <Form.Label>Date: </Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Enter date"
                    name='date'
                    value={toDo.date}
                    onChange={inputChanged}
                    className="ml-2"
                    required
                  />
                </Form.Group>
              </Col>

              <Col xs="auto">
                <Button variant="primary" type="submit">
                  Add
                </Button>
              </Col>

            </Form.Row>
          </Form>
        </Container>

        <Container className="mt-5">
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>Description</th>
              <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {toDos.map((toDo, index) =>
              <tr key={index}>
                <td>{toDo.description}</td>
                <td>{toDo.date}</td>
              </tr>)}
            </tbody>
          </Table>
        </Container>
      </Container>
    </div>
  );
};

export default Todolist;
