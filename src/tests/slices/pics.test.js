import reducer, { updatePics } from 'slices/pics';

const unFormattedPics = [
  {
    ups: 1001,
    downs: 1900,
    num_comments: 5500,
    created_utc: 1592410647,
  },
];

describe('PicsSlice', () => {
  describe('updatePics', () => {
    let state;

    beforeEach(() => {
      const action = updatePics(unFormattedPics);
      state = reducer(undefined, action)[0];
    });

    const itFormats = (key, assertion) => {
      it(`formats ${key}`, () => {
        expect(state[key]).toEqual(assertion);
      });
    };

    itFormats('ups', '1k');
    itFormats('downs', '2k');
    itFormats('num_comments', '6k');
    itFormats('created_utc', '3 months ago');
  });
});
