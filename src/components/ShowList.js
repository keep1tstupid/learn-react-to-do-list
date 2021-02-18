import React from 'react';
import { Table, Container, } from 'react-bootstrap';
import Item from "./Item";

const ShowList = (props) => (
  <div>
    <Container className={'mt-3 pl-0 pr-0'}>
      <Table striped bordered hover >
        <thead>
        <tr>
          <th width='40%'>Description</th>
          <th width='40%'>Date</th>
          <th width='20%'>Actions</th>
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
