import localStorageMock from '../../__mocks__/localStorage';
import { chordsManager } from '../chord-manager';

window.localStorage = localStorageMock;

describe('Prepare chords handles list of chords', () => {
  afterEach(() => {
    localStorage.removeItem('chordsData');
  });

  test('When getting chords if there is not set data in localstorage, this method sets it', () => {
    const result = chordsManager.getChords();
    const chordsData = JSON.parse(localStorage.getItem('chordsData'));
    expect(chordsData).not.toBe(null);
    expect(chordsData.length).toBe(253);

    chordsData.forEach(item => {
      expect(item).toHaveProperty('firstChord');
      expect(item).toHaveProperty('secondChord');
      expect(item).toHaveProperty('changes');
    });
  });

  test('Setting chord changes', () => {
    chordsManager.getChords();
    const data = { firstChord: 'E', secondChord: 'A', changes: '50' };
    const chordsData = JSON.parse(localStorage.getItem('chordsData'));
    const findExistingData = chordsData.find(
      item =>
        item.firstChord === data.firstChord &&
        item.secondChord === data.secondChord
    );
    expect(findExistingData.changes.length).toBe(1);
    expect(findExistingData.changes[0]).toBe(0);
    const result = chordsManager.setChord(data);

    const newChordsData = JSON.parse(localStorage.getItem('chordsData'));
    const findSetData = newChordsData.find(
      item =>
        item.firstChord === data.firstChord &&
        item.secondChord === data.secondChord
    );
    expect(findSetData.changes.length).toBe(2);
    expect(findSetData.changes[0]).toBe(0);
    expect(findSetData.changes[1]).toBe(50);
  });

  test('Setting chords stores only last 7 chord changes', () => {
    chordsManager.getChords();
    const chordsData = JSON.parse(localStorage.getItem('chordsData'));
    const changeData = chordsData.map(item => {
      const foundChord = item.firstChord === 'E' && item.secondChord === 'A';
      if (foundChord) {
        item.changes = [0, 10, 20, 30, 50, 60, 70];
      }
      return item;
    });
    localStorage.setItem('chordsData', JSON.stringify(changeData));

    chordsManager.setChord({ firstChord: 'E', secondChord: 'A', changes: 100 });
    const newChordsData = JSON.parse(localStorage.getItem('chordsData'));

    const findSetData = newChordsData.find(
      item => item.firstChord === 'E' && item.secondChord === 'A'
    );
    expect(findSetData.changes.length).toBe(7);
  });
});
