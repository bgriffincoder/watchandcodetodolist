import React, { Component } from 'react';
import Add from './Components/Add/Add';
import Change from './Components/Change/Change';
import Delete from './Components/Delete/Delete';
import Display from './Components/Display/Display';
import Store from './Components/Store/Store';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Add />
        <Change />
        <Delete />
        <Display />
        <Store />
      </div>
    );
  }
}

export default App;
