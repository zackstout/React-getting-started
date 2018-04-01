import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class NewStar extends Component {
  render() {
    return (
        <div>
        <input value={this.props.star.name} onChange={this.props.fn('name')} />
        <input value={this.props.star.diameter} onChange={this.props.fn('diameter')} />
        </div>
    );
  }
}

export default NewStar;
