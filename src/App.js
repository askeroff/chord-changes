import React, { Component } from 'react';
import swal from 'sweetalert';
import { chordsManager } from './common/chord-manager';
import Chord from './components/Chord';
import Header from './components/Header';
import Timer from './components/Timer';
import './index.css';
class App extends Component {
  state = {
    chords: chordsManager.getChords(),
    selected: 'E',
    showAll: true,
    timerIsOn: false,
    seconds: this.countDownSeconds
  };
  timer = null;

  countDownSeconds = 65;

  askChordChanges = ({ firstChord, secondChord }) => {
    const title = `Write your chord changes for ${firstChord}-${secondChord}`;
    swal(title, {
      content: 'input',
      buttons: true
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

  setShowAll = show => {
    this.setState({
      showAll: show
    });
  };

  setTimerOn = value => {
    this.setState({
      timerIsOn: value
    });
  };

  renderChords() {
    return this.state.chords.map(item => {
      const key = `${item.firstChord}-${item.secondChord}`;
      return (
        <Chord
          selected={this.state.selected}
          showAll={this.state.showAll}
          askChordChanges={this.askChordChanges}
          key={key}
          {...item}
        />
      );
    });
  }

  decrementSeconds = () => {
    if (this.state.seconds === 1) {
      clearInterval(this.timer);
      swal('Time Is Up!');
      this.setTimerOn(false);
      this.setState({ seconds: this.countDownSeconds });
    } else {
      this.setState({
        seconds: this.state.seconds - 1
      });
    }
  };

  handleTimerStart = () => {
    this.decrementSeconds();
    this.timer = setInterval(this.decrementSeconds, 1000);
    this.setState({ seconds: this.countDownSeconds });
  };

  handleTimerStop = () => {
    clearInterval(this.timer);
  };

  render() {
    return (
      <div className="app">
        <Header
          handleSelectChange={this.handleSelectChange}
          selected={this.state.selected}
          setChords={this.setChords}
          setShowAll={this.setShowAll}
          setTimerOn={this.setTimerOn}
          timerIsOn={this.state.timerIsOn}
          handleTimerStart={this.handleTimerStart}
          handleTimerStop={this.handleTimerStop}
          chordsList={chordsManager.chords}
        />
        <Timer seconds={this.state.seconds} timerIsOn={this.state.timerIsOn} />
        <div id="chords">{this.renderChords()}</div>
      </div>
    );
  }
}

export default App;
