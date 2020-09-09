import React from 'react';
import { shallow } from 'enzyme';
import { usePic } from 'hooks';
import { pics, comments } from 'tests/factory';
import Detail from 'views/detail';

jest.mock('hooks');

describe('Detail', () => {
  let component;

  describe('when isLoading is true', () => {
    beforeEach(() => {
      usePic.mockReturnValue([true, null]);
      component = shallow(<Detail />);
    });

    it('renders <LoadingTile />', () => {
      expect(component.find('LoadingTile')).toExist();
    });
  });

  describe('when error is true', () => {
    beforeEach(() => {
      usePic.mockReturnValue([null, null, null, true]);
      component = shallow(<Detail />);
    });

    it('renders <Error />', () => {
      expect(component.find('Error')).toExist();
    });
  });

  describe('when error and isLoading are false', () => {
    beforeEach(() => {
      usePic.mockReturnValue([false, pics[0], comments, false]);
      component = shallow(<Detail />);
    });

    it('renders <Tile />', () => {
      expect(component.find('Tile')).toExist();
    });

    it('renders <Comment /> twice', () => {
      expect(component.find('Comment').length).toEqual(pics.length);
    });
  });
});
