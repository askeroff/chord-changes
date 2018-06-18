import React from 'react';

const Header = props => {
  const options = props.chordsList.map(chord => {
    return (
      <option key={chord} name={chord}>
        {chord}
      </option>
    );
  });
  return (
    <header>
      <h1 id="chordsTitle"> Chord Changes </h1>
      <ul className="navigation">
        <select className="chordsList">{options}</select>
        <li>
          <button>Show All Permutations For The Selected Chord</button>
        </li>
        <li>
          <button>Show All Permutations For All Chords</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
