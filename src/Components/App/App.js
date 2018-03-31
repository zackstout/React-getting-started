
import React, { Component } from 'react';
// nice, gives an error to signal we don't need this:
// import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header.js';
import Instructions from '../Instructions/Instructions';

class App extends Component {

  constructor(props) {
    super(props);

    // alter local state:
    this.state = {
      message: "hello",
      user: {
        name: '',
        city: ''
      }
    }
    // this.handleChangeFor = this.handleChangeFor.bind(this);
  }

  // Currying:

  // handleChangeFor = (propName) => {
  //   return (event) => {
  //     this.setState({user: {
  //       ...this.state.user,
  //       [propName] : event.target.value,
  //     }});  
  //   }
  // }

      // Note: can compress even further:
      handleChangeFor = propName => event => {
          this.setState({user: {
            ...this.state.user,
            [propName] : event.target.value,
          }});  
      }


  render() {
    return (
      <div className="App">
        <Header />
        <Instructions />
        { this.state.message }

        <p> The user is { this.state.user.name }, coming to use from regal { this.state.user.city }! </p>

        <p>
          <input onChange={this.handleChangeFor('name')} />
          <input onChange={this.handleChangeFor('city')} />
        </p>

      </div>
    );
  }
}

export default App;
