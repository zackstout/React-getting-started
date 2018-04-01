import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class StarList extends Component {
  render() {
    return (
        <ul>
            { this.props.stars}
        </ul>
    );
  }
}

export default StarList;
