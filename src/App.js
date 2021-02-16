import React, { useState } from 'react';
import './App.css';

import AddToDo from './AddToDo';
import ShowList from './ShowList';

function App() {
  const [toDos, setToDos] = useState([]);

  const onDelete = (index) => {
    setToDos(toDos.filter((_, idx) => index !== idx))
  }

  return (
    <div className='App'>
      <AddToDo
        onAddingItem={(toDo) => setToDos([...toDos, toDo])}
      />
      <ShowList
        toDos={toDos}
        onDeletingItem={onDelete}
      />
    </div>
  )
}

export default App;
