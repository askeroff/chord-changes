import React from 'react';

class Chord extends React.Component {
  getChordsInRightOrder = () => {
    if (!this.props.showAll && this.props.selected !== this.props.firstChord) {
      return {
        firstChord: this.props.secondChord,
        secondChord: this.props.firstChord
      };
    }
    return {
      firstChord: this.props.firstChord,
      secondChord: this.props.secondChord
    };
  };

  render() {
    const { askChordChanges, changes } = this.props;
    const { firstChord, secondChord } = this.getChordsInRightOrder();
    const chordObject = {
      firstChord: this.props.firstChord,
      secondChord: this.props.secondChord
    };
    return (
      <p onClick={askChordChanges.bind(this, chordObject)} className="chord">
        {firstChord} - {secondChord} ({changes[changes.length - 1]})
      </p>
    );
  }
}

export default Chord;
