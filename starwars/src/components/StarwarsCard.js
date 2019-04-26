import React from 'react';

function StarWarsChars(props) {
  return (
    <div className="starwars-card">
        <h3>{props.starwarsChars.name}</h3>
        <p>
          <strong>Species:</strong> {props.starwarsChars.species}
        </p>
      </div>
    </div>
  );
}

export default StarWarsCard;



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