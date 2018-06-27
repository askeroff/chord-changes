import { prepareChords } from '../prepare-chords';

describe('Prepare chords handles list of chords', () => {
  test('Get Chords has the F chord and doesnt return undefined', () => {
    const result = prepareChords.getChords();
    expect(result).toContain('Full F');
  });
});
