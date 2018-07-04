import React from 'react';

class Chord extends React.Component {
  render() {
    const { firstChord, secondChord, askChordChanges } = this.props;
    return (
      <p
        onClick={askChordChanges.bind(this, { firstChord, secondChord })}
        className="chord"
      >
        {this.props.firstChord} - {this.props.secondChord} ({
          this.props.changes[this.props.changes.length - 1]
        })
      </p>
    );
  }
}

export default Chord;
