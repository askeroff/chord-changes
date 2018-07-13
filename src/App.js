import React, { Component } from 'react';
import swal from 'sweetalert';
import { chordsManager } from './common/chord-manager';
import Chord from './components/Chord';
import Header from './components/Header';
import './index.css';
class App extends Component {
  state = {
    chords: chordsManager.getChords(),
    selected: 'all'
  };

  askChordChanges = ({ firstChord, secondChord }) => {
    const title = `Write your chord changes for ${firstChord}-${secondChord}`;
    swal(title, {
      content: 'input'
    }).then(changes => {
      chordsManager.setChord({ firstChord, secondChord, changes });
      const chords =
        this.state.selected === 'all'
          ? chordsManager.getChords()
          : chordsManager.getCombinationsForChord(this.state.selected);
      this.setState({ chords });
    });
  };

  setChords = chords => {
    this.setState({ chords });
  };

  handleSelectChange = event => {
    this.setState({
      selected: event.target.value
    });
  };

  renderChords() {
    return this.state.chords.map(item => {
      const key = `${item.firstChord}-${item.secondChord}`;
      return (
        <Chord askChordChanges={this.askChordChanges} key={key} {...item} />
      );
    });
  }

  render() {
    return (
      <div className="app">
        <Header
          handleSelectChange={this.handleSelectChange}
          selected={this.state.selected}
          setChords={this.setChords}
          chordsList={chordsManager.chords}
        />
        <div id="chords">{this.renderChords()}</div>
      </div>
    );
  }
}

export default App;
