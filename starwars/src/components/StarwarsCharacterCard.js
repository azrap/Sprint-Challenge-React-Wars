import React from 'react';

function StarWarsChar(props) {
  return (
    <div className="starwars-char">
        <h3>{props.starwarschar.name}</h3>
        <p>
          <strong>Species:</strong> {props.starwarschar.species}
        </p>
        <p>
          <strong>Age:</strong> {props.student.age}
        </p>
        <p>
          <strong>Best Friends:</strong> {props.student.bestFriend}
        </p>
      </div>
    </div>
  );
}

export default StarwarsChar;



/*
birth year
created
edited
eye_color
gender
hair_color
height:
homeworld:
mass:
name:
skin_color:
species:
starships:
url:
vehicles: