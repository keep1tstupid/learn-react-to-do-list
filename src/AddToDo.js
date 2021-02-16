import React, { useState } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';

const AddToDo = (props) => {
  const [toDo, setToDo] = useState({
    description: '',
    date: '',
  })

  const inputChanged = (event) => {
    setToDo({...toDo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setToDo({
      description: '',
      date: '',
    })
  }

  const handleAdding = () => {
    props.onAddingItem(toDo);
  }

  return (
    <div>
      <Container className='mt-5'>
        <Container className='block-example border border-primary p-3 rounded mb-0'>
          <Form onSubmit={addTodo} inline >
            <Form.Row className='align-items-center'>
              <Col xs='auto'>
                <Form.Group>
                  <Form.Label>Description: </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter description'
                    name='description'
                    value={toDo.description}
                    onChange={inputChanged}
                    className='ml-2'
                    required
                  />
                </Form.Group>
              </Col>

              <Col xs='auto'>
                <Form.Group>
                  <Form.Label>Date: </Form.Label>
                  <Form.Control
                    type='date'
                    placeholder='Enter date'
                    name='date'
                    value={toDo.date}
                    onChange={inputChanged}
                    className='ml-2'
                    required
                  />
                </Form.Group>
              </Col>

              <Col xs='auto'>
                <Button variant='primary' type='submit' onClick={handleAdding}>
                  Add
                </Button>
              </Col>

            </Form.Row>
          </Form>
        </Container>
      </Container>
    </div>
  );
}

export default AddToDo;
