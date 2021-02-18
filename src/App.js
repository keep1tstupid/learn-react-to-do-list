import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import ToDoView from "./views/ToDoView";
import HomeView from "./views/HomeView";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomeView}/>
            <Route path="/todo" component={ToDoView}/>
            <Route path="/contact" render={() => <h1>Contact address</h1>} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
