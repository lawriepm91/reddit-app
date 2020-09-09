import mount from 'tests/helpers';
import { pics } from 'tests/factory';
import List from 'views/list';
import { useTopPics, usePic } from 'hooks';
import urls from 'urls';

jest.mock('hooks');
jest.mock('selectors');

describe('List', () => {
  let component;

  describe('when loading is true', () => {
    beforeEach(() => {
      useTopPics.mockReturnValue([true, null]);
      [component] = mount(List);
    });

    it('renders <LoadingTile /> 20 times', () => {
      expect(component.find('LoadingTile').length).toEqual(20);
    });
  });

  describe('when error is true', () => {
    beforeEach(() => {
      useTopPics.mockReturnValue([null, null, true]);
      [component] = mount(List);
    });

    it('renders <Error />', () => {
      expect(component.find('Error')).toExist();
    });
  });

  describe('when error and loading are false', () => {
    beforeEach(() => {
      useTopPics.mockReturnValue([null, pics, null]);
      [component] = mount(List);
    });

    it('shows the pics', () => {
      expect(component.find('Tile').length).toEqual(pics.length);
    });
  });

  describe('at', () => {
    describe('"/pics/1" route', () => {
      beforeEach(() => {
        usePic.mockReturnValue([true]);
        [component] = mount(List, null, { route: urls.pics.detail('1') });
      });

      it('renders <Detail />', () => {
        expect(component.find('Detail')).toExist();
      });
    });
  });
});
