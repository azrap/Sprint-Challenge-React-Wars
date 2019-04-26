import React, { Component } from 'react';
import './App.css';
import StarWarsChars from './components/StarWarsCard';


function StarWarsCard(props) {
  return (
    <div className="starwars-card">
        <h3>{props.starwarsChars.name}</h3>
        <p>
          <strong>Species:</strong> {props.starwarsChars.species}
        </p>
      </div>
  );
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsCharsOnState: starwarsChars,
      starwarsChar: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      
    );
  }
}

export default App;




<div className="class-list">
          {this.state.studentsOnState.map(student => (
            <StarWarsChars name={starwarsChars.name} key={starwarsChars.name} />
          ))}
        </div>