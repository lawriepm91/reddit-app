/* eslint-disable prefer-destructuring */
import reducer, { updateComments } from 'slices/comments';
import { comments } from 'tests/factory';

describe('CommentSlice', () => {
  describe('updateComment', () => {
    let state;

    beforeEach(() => {
      const action = updateComments(comments);
      state = reducer(undefined, action);
    });

    it('adds comments to the state', () => {
      expect(state).toEqual([
        {
          body: 'test',
          author: 'test',
          created_utc: 'Invalid date',
          id: '1',
        },
        {
          body: 'test',
          author: 'test',
          created_utc: 'Invalid date',
          id: '2',
        },
      ]);
    });
  });
});
