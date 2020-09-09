import React from 'react';
import { mount } from 'enzyme';
import Tile from 'views/tile';
import { pics } from 'tests/factory';

describe('Tile', () => {
  let component;

  describe('props', () => {
    describe('handleClick', () => {
      const mockHandleClick = jest.fn();

      beforeEach(() => {
        component = mount(<Tile handleClick={mockHandleClick} pic={pics[0]} />);
        const tile = component.find(Tile);
        tile.simulate('click');
      });

      describe('when defined', () => {
        it('calls handleClick onClick', () => {
          expect(mockHandleClick).toHaveBeenCalled();
        });
      });
    });

    describe('className', () => {
      beforeEach(() => {
        component = mount(<Tile pic={pics[0]} className="test-class" />);
      });

      describe('when defined', () => {
        it('is rendered with the "test-class" in the className', () => {
          expect(component.find(Tile)).toHaveClassName('test-class');
        });
      });
    });
  });
});
