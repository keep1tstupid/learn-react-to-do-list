import React from 'react';
import { Button, Table, Container, } from 'react-bootstrap';
import Item from "./Item";

const ShowList = (props) => (
  <div>
    <Container className='mt-5'>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Description</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
          {props.toDos.map((toDo, index) => <Item
            key={index}
            index={index}
            onDeletingItem={props.onDeletingItem}
            onEditingItem={props.onEditingItem}
            {...toDo}
          />)}
        </tbody>
      </Table>
    </Container>
  </div>
);

export default ShowList;
