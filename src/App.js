import React, { Component } from 'react';
import './App.scss';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        id: "_Max28",
        name: "Max",
        age: 28
      },
      {
        id: "_Dan26",
        name: "Dan",
        age: 26
      },
      {
        id: "_Danilla266",
        name: "Danilla",
        age: 266
      }
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person=>{
      return person.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    let persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  render() {
    let personsList = null;

    if (this.state.showPersons) {
      personsList = this.state.persons.map((person, index) => {
        return <Person key={person.id}
          name={person.name} age={person.age}
          changed={(event) => this.nameChangedHandler(event, person.id)}
          click={() => this.deletePersonHandler(index)}></Person>
      })
    }

    return (
      <div>
        <div className="App">
          <button className={this.state.showPersons? " is-active" : ""} onClick={this.togglePersonsHandler}>Toggle Persons`s List</button>
          {personsList}
        </div>
      </div>
    )
  }
}

export default App;
