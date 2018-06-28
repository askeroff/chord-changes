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
      'Folk G',
      'D/F#',
      'G/B',
      'C/G'
    ];
  }

  getChords() {
    const chordsData = localStorage.getItem('chordsData');
    if (chordsData === null) {
      const chordsPermutations = this.getChordsPermutations();
      localStorage.setItem('chordsData', JSON.stringify(chordsPermutations));
      return chordsPermutations;
    }
    return JSON.parse(chordsData);
  }

  getChordsPermutations() {
    const chordsPermutations = [];
    for (let a = 0; a < this.chords.length - 1; a++) {
      for (let b = a + 1; b < this.chords.length; b++) {
        const data = {
          firstChord: this.chords[a],
          secondChord: this.chords[b],
          changes: [0]
        };
        chordsPermutations.push(data);
      }
    }
    return chordsPermutations;
  }
}

export const prepareChords = new PrepareChords();
