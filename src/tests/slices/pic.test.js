/* eslint-disable prefer-destructuring */
import reducer, { updatePic } from 'slices/pic';

const unFormattedPic = {
  ups: 1001,
  downs: 1900,
  num_comments: 5500,
  created_utc: 1592410647,
};

describe('PicSlice', () => {
  describe('updatePic', () => {
    let state;

    beforeEach(() => {
      const action = updatePic(unFormattedPic);
      state = reducer(undefined, action);
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
