import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import AddToDo from "../components/AddToDo";
import ShowList from "../components/ShowList";
import '../App.css';


const ToDoView = () => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('toDos'));
    if (items) {
      setToDos(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  const onDelete = (index) => {
    setToDos(toDos.filter((_, idx) => index !== idx))
  };

  const onEdit = (index, toDo) => {
    setToDos(toDos.map((item, idx) => index === idx ? toDo : item))
  };

  return (
    <div className='App'>
      <Header />
      <AddToDo
        onAddingItem={(toDo) => setToDos([...toDos, toDo])}
      />
      <ShowList
        toDos={toDos}
        onDeletingItem={onDelete}
        onEditingItem={onEdit}
      />
    </div>
  )
}

export default ToDoView;
