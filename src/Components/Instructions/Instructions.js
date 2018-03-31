import React, { Component } from 'react';
// nice, gives an error to signal we don't need this:
// import logo from './logo.svg';
// import './App.css';
// import Header from '../Header/Header.js'

class Instructions extends Component {
  render() {
    return (
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    );
  }
}

export default Instructions;
