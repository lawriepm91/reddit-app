import React from 'react';
import { act } from 'react-dom/test-utils';

import mount from 'tests/helpers';
import { pics, comments } from 'tests/factory';

import Api from 'api';
import { usePic } from 'hooks';
import { updatePic } from 'slices/pic';
import { updateComments } from 'slices/comments';
import { commentsSelector, picSelector } from 'selectors';

jest.mock('api');
jest.mock('selectors');

function HookTestComponent() {
  const [isLoading, pic, picComments, error] = usePic();
  return (
    <div
      isLoading={isLoading}
      pic={pic}
      comments={picComments}
      error={error}
    />
  );
}

describe('usePic', () => {
  let component;
  let store;

  describe('with a resolved api call', () => {
    beforeEach(async () => {
      commentsSelector.mockReturnValue(comments);
      picSelector.mockReturnValue(pics[0]);
      Api.mockImplementation(() => ({
        fetchOne: jest.fn().mockResolvedValue([
          pics[0],
          comments,
        ]),
      }));

      await act(async () => {
        [component, , store] = mount(HookTestComponent);
      });

      component.update();
    });

    it('updates the store with comments', () => {
      expect(store.dispatch).toHaveBeenCalledWith(updateComments(comments));
    });

    it('updates the store with a pic', () => {
      expect(store.dispatch).toHaveBeenCalledWith(updatePic(pics[0]));
    });

    it('returns comments to the component', () => {
      const { comments: commentProp } = component.find('div').props();
      expect(commentProp).toEqual(comments);
    });

    it('return a pic to the component', () => {
      const { pic: picProp } = component.find('div').props();
      expect(picProp).toEqual(pics[0]);
    });

    it('returns isLoading as false to the component', () => {
      const { isLoading } = component.find('div').props();
      expect(isLoading).toEqual(false);
    });
  });

  describe('with an unresolved api call', () => {
    beforeEach(async () => {
      Api.mockImplementation(() => ({
        fetchOne: jest.fn().mockRejectedValue('error'),
      }));

      await act(async () => {
        [component] = mount(HookTestComponent);
      });

      component.update();
    });

    it('returns an error to the component', () => {
      const { error } = component.find('div').props();
      expect(error).toEqual('error');
    });

    it('returns isLoading as false to the component', () => {
      const { isLoading } = component.find('div').props();
      expect(isLoading).toEqual(false);
    });
  });
});
