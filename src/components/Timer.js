import React from 'react';

export default class Timer extends React.Component {
  render() {
    const time = this.props.seconds;
    if (!this.props.timerIsOn) {
      return null;
    }
    return (
      <div className="timer__time">
        <span>{time}</span>
      </div>
    );
  }
}
