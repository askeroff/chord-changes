import React from 'react';
import { chordsManager } from '../common/chord-manager';

class Header extends React.Component {
  showCombinationsForOneChord = () => {
    const chords = chordsManager.getCombinationsForChord(this.props.selected);
    this.props.setChords(chords);
    this.props.setShowAll(false);
  };

  showAllChords = () => {
    const chords = chordsManager.getChords();
    this.props.setChords(chords);
    this.props.setShowAll(true);
  };

  handleTimer = () => {
    const timerIsOn = this.props.timerIsOn;
    if (timerIsOn) {
      this.props.handleTimerStop();
    } else {
      this.props.handleTimerStart();
    }
    this.props.setTimerOn(!timerIsOn);
  };

  render() {
    const timerButtonString = this.props.timerIsOn
      ? 'Cancel One Minute Timer'
      : 'Start One Minute Timer';
    const options = this.props.chordsList.map(chord => {
      return (
        <option key={chord} value={chord} name={chord}>
          {chord}
        </option>
      );
    });
    return (
      <header>
        <h1 className="chordsTitle"> Chord Changes </h1>
        <h2 className="chordsSubtitle">
          Overall: {this.props.chordsList.length} chords
        </h2>
        <ul className="navigation">
          <select
            onChange={this.props.handleSelectChange}
            className="chordsList"
          >
            {options}
          </select>
          <li>
            <button onClick={this.showCombinationsForOneChord}>
              Show All Permutations For The Selected Chord
            </button>
          </li>
          <li>
            <button onClick={this.showAllChords}>
              Show All Permutations For All Chords
            </button>
          </li>
          <li>
            <button onClick={this.handleTimer}>{timerButtonString}</button>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
