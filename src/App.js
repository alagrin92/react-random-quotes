import React, { Component } from 'react';
import './App.css';
import DisplayContent from './components/DisplayContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }
  
  render() {
    return (
      <div className="App">
        <DisplayContent text="Your Random Quote"/>
      </div>
    );
  }
}

export default App;
