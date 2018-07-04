class ChordsManager {
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

  setChord({ firstChord, secondChord, changes }) {
    const chordsData = JSON.parse(localStorage.getItem('chordsData'));
    if (chordsData !== null) {
      const newData = chordsData.map(item => {
        const foundChord =
          item.firstChord === firstChord && item.secondChord === secondChord;
        if (foundChord) {
          item.changes.push(Number(changes));
          item.changes = item.changes.slice(
            Math.max(item.changes.length - 7, 0)
          );
        }
        return item;
      });
      localStorage.setItem('chordsData', JSON.stringify(newData));
    }
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

export const chordsManager = new ChordsManager();
