import React, { useState } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import moment from 'moment';
import MomentUtils from "@date-io/moment";


const AddToDo = (props) => {
  const [toDo, setToDo] = useState({
    description: '',
    date: moment(),
  });

  const inputChanged = (event) => {
    setToDo({...toDo, [event.target.name]: event.target.value});
    console.log(event, event.target.value);
  };

  const dateChanged = (date) => {
    setToDo({...toDo,
      date: date,
    });
    console.log(date);
  };

  const clearOnSubmit = (event) => {
    event.preventDefault();
    setToDo({
      description: '',
      date: moment(),
    });
  };

  const handleAdding = () => {
    props.onAddingItem(toDo);
  };

  return (
    <div>
      <Container className={'mt-3 pl-0 pr-0'}>
        <Container className='block-example border border-primary p-3 rounded mb-0'>
          <Form onSubmit={clearOnSubmit} inline >
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
                  <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                    <DatePicker
                      value={toDo.date}
                      name='date'
                      format="DD.MM.YYYY"
                      onChange={dateChanged}
                      />
                  </MuiPickersUtilsProvider>
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
