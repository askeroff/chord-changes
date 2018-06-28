import localStorageMock from '../../__mocks__/localStorage';
import { prepareChords } from '../prepare-chords';

window.localStorage = localStorageMock;

describe('Prepare chords handles list of chords', () => {
  test('When getting chords if there is not set data in localstorage, this method sets it', () => {
    const result = prepareChords.getChords();
    const chordsData = JSON.parse(localStorage.getItem('chordsData'));
    expect(chordsData).not.toBe(null);
    expect(chordsData.length).toBe(253);

    chordsData.forEach(item => {
      expect(item).toHaveProperty('firstChord');
      expect(item).toHaveProperty('secondChord');
      expect(item).toHaveProperty('changes');
    });
  });
});
