
import React, { Component } from 'react';
// nice, gives an error to signal we don't need this:
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.js';
import Instructions from '../Instructions/Instructions';
import NewStar from '../NewStar/NewStar.js';
import StarList from '../StarList/StarList.js';


class App extends Component {

  constructor(props) {
    super(props);

    // alter local state:
    this.state = {
      newStar: {
        name: '',
        diameter: ''
      },
      message: "hello",
      user: {
        name: '',
        city: ''
      },
      starList: ['deneb', 'elnath', 'canopus'],
      unusedList: [<li>'hi'</li>, <li>'jsx'</li>],
      starObjs: [{'name': 'deneb', 'diameter': 200}, {'name': 'elnath', 'diameter': 40}, {'name': 'canopus', 'diameter': 130}]
    }
    // this.handleChangeFor = this.handleChangeFor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitStar = this.handleSubmitStar.bind(this);

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

      handleStarChangeFor = propName => event => {
        this.setState({newStar: {
          ...this.state.newStar,
          [propName] : event.target.value,
        }});  
    }

      handleSubmit = function(event) {
        event.preventDefault();
        console.log(this.state.user);
        this.setState({
          user: {
            name: '',
            city: ''
          }
        })
      }

      handleSubmitStar = function(event) {
        event.preventDefault();
        console.log(this.state.newStar);
        this.state.starObjs.push(this.state.newStar);
        // clear out fields (well, clear state, which we tell fields to look at):
        this.setState({
          newStar: {
            name: '',
            diameter: ''
          }
        });
      }

      // componentDidMount() {
      //   this.getPlanets();
      // }

      getPlanets = function() {
        axios.get("https://swapi.co/api/planets/?format=json")
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err)
          })
      }


  render() {
    // let stars = [];
    // for (let i=0; i < this.state.starList.length; i++) {
    //   const star = <li> { this.state.starList[i] } </li>;
    //   stars.push(star);
    // }

    // Using map:
    const allStars = this.state.starObjs.map(star => <li key= {star.name}> { star.name } has a diameter of { star.diameter } </li>);

    this.getPlanets();
    return (
      <div className="App">
        <Header />
        <Instructions />

        { this.state.message }

        {/* React can't disply objects directly to the DOM: */}
        {/* <div>
          this.state: { JSON.stringify(this.state) }
        </div> */}

        <div>
          starlist: { this.state.starList }
        </div>

        <form onSubmit={this.handleSubmitStar}>
          <NewStar star={this.state.newStar} fn={this.handleStarChangeFor}/>
         
          {/* Hmm, if we call this, it runs on every keyup: */}
          {/* <button onClick={this.handleClick}>Log User</button> */}
          <input type="submit" value="Submit the form"/>
        </form>

        <StarList stars={ allStars }/>
    d

        <p> The user is { this.state.user.name }, coming to use from regal { this.state.user.city }! </p>

      {/* Convert to form: */}
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.user.name} onChange={this.handleChangeFor('name')} />
          <input value={this.state.user.city} onChange={this.handleChangeFor('city')} />
          {/* Hmm, if we call this, it runs on every keyup: */}
          {/* <button onClick={this.handleClick}>Log User</button> */}
          <input type="submit" value="Submit the form"/>
        </form>

      </div>
    );
  }
}

export default App;
