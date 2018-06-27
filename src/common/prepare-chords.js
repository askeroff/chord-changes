class PrepareChords {
  constructor() {
    this.chords = [
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
      'Folk G'
    ];
  }

  getChords() {
    return this.chords;
  }
}

export const prepareChords = new PrepareChords();
