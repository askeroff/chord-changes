import React from 'react';
import { chordsManager } from '../common/chord-manager';

class Header extends React.Component {
  showCombinationsForOneChord = () => {
    const chords = chordsManager.getCombinationsForChord(this.props.selected);
    this.props.setChords(chords);
  };

  showAllChords = () => {
    const chords = chordsManager.getChords();
    this.props.setChords(chords);
  };

  render() {
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
        </ul>
      </header>
    );
  }
}

export default Header;
