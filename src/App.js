import React, { Component } from 'react';
import { prepareChords } from './common/prepare-chords';
import Chord from './components/Chord';
import Header from './components/Header';
import './index.css';

class App extends Component {
  renderChords() {
    const chords = prepareChords.getChords();
    return chords.map(item => {
      const key = `${item.firstChord}-${item.secondChord}`;
      return <Chord key={key} {...item} />;
    });
  }

  render() {
    return (
      <div className="app">
        <Header chordsList={prepareChords.chords} />
        <div id="chords">{this.renderChords()}</div>
      </div>
    );
  }
}

export default App;
