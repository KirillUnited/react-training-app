import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {
        name: "Max",
        age: 28
      },
      {
        name: "Dan",
        age: 26
      }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {
          name: "Maximillian",
          age: 28
        },
        {
          name: "Dan",
          age: 999999999
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <div className="App">
          <button onClick={this.switchNameHandler}>Swith name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>and im a nooby!</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        </div>
      </div>
    )
  }
}

export default App;
