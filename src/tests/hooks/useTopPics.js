import React from 'react';
import { act } from 'react-dom/test-utils';

import mount from 'tests/helpers';
import { pics } from 'tests/factory';

import Api from 'api';
import { useTopPics } from 'hooks';
import { updatePics } from 'slices/pics';
import { picsSelector } from 'selectors';

jest.mock('api');
jest.mock('selectors');

function HookTestComponent() {
  const [isLoading, picsProp, error] = useTopPics();
  return (
    <div
      isloading={isLoading.toString()}
      pic={picsProp}
      error={error}
    />
  );
}

describe('useTopPics', () => {
  let component;
  let store;

  describe('with a resolved api call', () => {
    beforeEach(async () => {
      picsSelector.mockReturnValue(pics);
      Api.mockImplementation(() => ({
        fetchAll: jest.fn().mockResolvedValue(pics),
      }));

      await act(async () => {
        [component, , store] = mount(HookTestComponent);
      });

      component.update();
    });

    it('updates the store with pics', () => {
      expect(store.dispatch).toHaveBeenCalledWith(updatePics(pics));
    });

    it('returns pics to the component', () => {
      const { pics: picsProp } = component.find('div').props();
      expect(picsProp).toEqual(pics);
    });

    it('returns isLoading as "false" to the component', () => {
      const { isloading } = component.find('div').props();
      expect(isloading).toEqual('false');
    });
  });

  describe('with an unresolved api call', () => {
    beforeEach(async () => {
      Api.mockImplementation(() => ({
        fetchAll: jest.fn().mockRejectedValue('error'),
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

    it('returns isLoading as "false" to the component', () => {
      const { isloading } = component.find('div').props();
      expect(isloading).toEqual('false');
    });
  });
});
