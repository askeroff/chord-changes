import React from 'react';

const Chord = props => (
  <p className="chord">
    {props.firstChord} - {props.secondChord} ({
      props.changes[props.changes.length - 1]
    })
  </p>
);

export default Chord;
