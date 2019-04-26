import React from 'react';



function StarwarsChars(props) {
  return (
    <div className="starwars-card">
        <h3>{props.starwarsChar.name}</h3>
        <p>
          <strong>Gender:</strong> {props.starwarsChar.gender}
          
        </p>
      </div>
  );
}

export default StarwarsChars;



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
*/