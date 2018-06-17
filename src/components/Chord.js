import React from 'react';

const Chord = props => (
  <p className="chord">
    {props.firstChord} - {props.secondChord} ({props.changes})
  </p>
);

export default Chord;
