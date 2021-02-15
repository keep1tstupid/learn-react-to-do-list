import React, { useState } from 'react';
import './App.css';

import AddToDo from "./AddToDo";
import ShowList from "./ShowList";

function App() {
  const [toDos, setToDos] = useState([]);

  return (
    <div className="App">
      <AddToDo onAddingItem={(toDo) => setToDos([...toDos, toDo])}/>
      <ShowList toDos={toDos}/>
    </div>
  )
}

export default App;
