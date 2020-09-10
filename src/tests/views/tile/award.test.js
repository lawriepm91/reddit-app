import React from 'react';
import { shallow } from 'enzyme';
import Award from 'views/tile/award';
import { award } from 'tests/factory';

const render = (name) => shallow(
  <Award
    award={award({ name })}
  />,
);

describe('Award', () => {
  let component;

  const itRenders = (name) => {
    describe(`when name=${name}`, () => {
      beforeEach(() => {
        component = render(name);
      });

      it('renders', () => {
        expect(component.find('img')).toExist();
      });
    });
  };

  itRenders('Platinum');
  itRenders('Gold');
  itRenders('Silver');

  describe('when name is not equal to Platinum, Gold or Silver', () => {
    beforeEach(() => {
      component = render('test');
    });

    it('does not render', () => {
      expect(component.find('Fragment')).toExist();
    });
  });
});
