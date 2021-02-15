import React, { useState } from 'react';
import {Form, Button, Table, Container, Col} from "react-bootstrap";

const ShowList = (props) => {

  const delItem = (index) => {

  }

  return (
    <div>
      <Container className="mt-5">
        <Table striped bordered hover>
          <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th> </th>
          </tr>
          </thead>
          <tbody>
          {props.toDos.map((toDo, index) =>
            <tr key={index}>
              <td>{toDo.description}</td>
              <td>{toDo.date}</td>
              <td>
                <Button variant="danger">
                  Delete
                </Button>
              </td>
            </tr>)}
          </tbody>
        </Table>
      </Container>
    </div>

  );

}

export default ShowList;
