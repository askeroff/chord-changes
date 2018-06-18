import React, { Component } from 'react';
import Chord from './components/Chord';
import Header from './components/Header';
import './index.css';

const chordsList = [
  'E',
  'A',
  'D',
  'Am',
  'Em',
  'Dm',
  'C7',
  'G7',
  'D7',
  'A7',
  'E7',
  'B7',
  'G',
  'C',
  'F7',
  'Full F',
  'mini F',
  'Full G',
  'Rock G',
  'Folk G',
  'Asus4',
  'Asus2',
  'Dsus4',
  'Dsus2'
];
class App extends Component {
  renderChords() {
    const chords = [];
    for (let a = 0; a < chordsList.length - 1; a++) {
      for (let b = a + 1; b < chordsList.length; b++) {
        const props = {
          firstChord: chordsList[a],
          secondChord: chordsList[b],
          changes: 0
        };
        const key = `${props.firstChord}-${props.secondChord}`;
        chords.push(<Chord key={key} {...props} />);
      }
    }
    return chords;
  }

  render() {
    return (
      <div className="app">
        <Header chordsList={chordsList} />
        <div id="chords">{this.renderChords()}</div>
      </div>
    );
  }
}

export default App;
