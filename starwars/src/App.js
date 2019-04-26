import React, { Component } from 'react';
import './App.css';
import StarwarsChars from './components/StarwarsCard';



// current list of characters


class App extends Component {
  constructor() {
    super();
    this.state = {
       starwarsChars: []
    
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
      <div className="starwars-list">
      <h1> May the force be with you </h1>
          {
            this.state.starwarsChars.map(ele => (
            <StarwarsChars starwarsChar={ele} key={ele.name} />
          ))       
          }
    </div>
      
    );
  }
}

export default App;




