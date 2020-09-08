import { mount } from 'tests/helpers';
import { pics } from 'tests/factory';
import List from 'views/list';
import { useTopPics } from 'hooks';
import { picsSelector } from 'selectors';

jest.mock('hooks');
jest.mock('selectors');

describe('List', () => {
  let component;

  describe('when loading is true', () => {
    beforeEach(() => {
      useTopPics.mockReturnValue([true, null]);
      [component] = mount(List);
    });

    it('shows the loading message', () => {
      expect(component.find('.loading')).toExist();
    });
  });

  describe('when error is true', () => {
    beforeEach(() => {
      useTopPics.mockReturnValue([null, true]);
      [component] = mount(List);
    });

    it('shows the error message', () => {
      expect(component.find('.error')).toExist();
    });
  });

  describe('when error and loading are false', () => {
    beforeEach(() => {
      useTopPics.mockReturnValue([null, null]);
      picsSelector.mockReturnValue(pics);
      [component] = mount(List);
    });

    it('shows the pics', () => {
      expect(component.find('Tile').length).toEqual(pics.length);
    });
  });
});
