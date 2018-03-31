
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
    // refers to the method we define below, outside of the constructor:
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);

    // this.handleChangeFor = this.handleChangeFor.bind(this);

  }

  handleChange = function(event) {
    console.log(event.target.value)
    // this.state.user = event.target.value;
    // we might think to say, this.state.user = event.target.value. I think the issue is going to be, we need an arrow function.
    // this.setState({user: {
    //     name : event.target.value,
    //     city : this.state.user.city
    //   }});

      this.setState({user: {
        ...this.state.user,
        name : event.target.value,
      }});  
  }

  handleChange2 = function(event) {
    console.log(event.target.value)
    // this.state.user = event.target.value;
    // we might think to say, this.state.user = event.target.value. I think the issue is going to be, we need an arrow function.
    this.setState({user: {
      ...this.state.user,
      city : event.target.value, 
    }});
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
