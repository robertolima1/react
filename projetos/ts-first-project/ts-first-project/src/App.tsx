import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Livros from './Livros';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Livros name="Teste" autor="Eu mesmo" ano="2050"/>
      </div>
    );
  }
}

export default App;
