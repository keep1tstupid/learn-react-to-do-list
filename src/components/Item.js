import React, { useState }  from 'react';
import {Button, Form,} from 'react-bootstrap';
import moment from 'moment';
import MyDatePicker from "./MyDatePicker";

const Item = (props) =>{
  const INITIAL_STATE = {
    description: '',
    date: '',
  };

  const [edit, setEdit] = useState(false);
  const [toDo, setToDo] = useState(INITIAL_STATE);

  const handleEdit = (index) => {
    setEdit(false);
    props.onEditingItem(index, toDo);
  };

  const inputChanged = (event) => {
    setToDo({...toDo, [event.target.name]: event.target.value});
  };

  const dateChanged = (date) => {
    setToDo({...toDo, date: date });
  };

  const enableEditMode = () => {
    setEdit(true);
    setToDo({
      description: props.description,
      date: props.date,
    });
  };

  const cancelEditMode = () => {
    setEdit(false);
    setToDo(INITIAL_STATE);
  };

  return edit ? (
    <tr key={props.index}>
      <td>
        <Form.Control
          type='text'
          placeholder='Enter description'
          name='description'
          value={toDo.description}
          onChange={inputChanged}
          required
        />
      </td>
      <td>
        <MyDatePicker
          value={toDo.date}
          onEditingDate={dateChanged}
        />
      </td>
        <td>
          <Button
            variant='success'
            onClick={() => handleEdit(props.index)}>
            Save
          </Button>
          {' '}
          <Button
            variant='secondary'
            onClick={cancelEditMode}>
            Cancel
          </Button>
        </td>
        </tr>
    ) : (
    <tr key={props.index}>
      <td>{props.description}</td>
      <td> {moment(props.date).format('DD.MM.YYYY')} </td>
      <td>
        <Button
          variant='secondary'
          onClick={enableEditMode}>
          Edit
        </Button>
        {' '}
        <Button
          variant='danger'
          onClick={()=> props.onDeletingItem(props.index)}>
          Delete
        </Button>
      </td>
  </tr>
)};

export default Item;
