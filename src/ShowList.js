import React from 'react';
import { Button, Table, Container, } from 'react-bootstrap';

const ShowList = (props) => (
  <div>
    <Container className='mt-5'>
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
              <Button
                variant='danger'
                onClick={() => props.onDeletingItem(index)}>
                Delete
              </Button>
            </td>
          </tr>)}
        </tbody>
      </Table>
    </Container>
  </div>
);

export default ShowList;
