import React from 'react';

class Chord extends React.Component {
  getChordsInRightOrder = () => {
    if (
      this.props.selected !== 'all' &&
      this.props.selected !== this.props.firstChord
    ) {
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
    return (
      <p
        onClick={askChordChanges.bind(this, { firstChord, secondChord })}
        className="chord"
      >
        {firstChord} - {secondChord} ({changes[changes.length - 1]})
      </p>
    );
  }
}

export default Chord;
