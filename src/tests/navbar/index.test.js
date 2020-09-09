import mount from 'tests/helpers';
import Navbar from 'navbar';
import urls from 'urls';

describe('App', () => {
  let component;

  describe('Go back Link', () => {
    describe('at', () => {
      describe(`"${urls.pics.detail('1')}"`, () => {
        beforeEach(() => {
          [component] = mount(Navbar, null, { route: urls.pics.detail('1') });
        });

        it('renders', () => {
          expect(component.find('a[href="/pics"]')).toExist();
        });
      });

      describe(`"${urls.pics()}"`, () => {
        beforeEach(() => {
          [component] = mount(Navbar, null, { route: urls.pics() });
        });

        it('does not render', () => {
          expect(component.find('a[href="/pics"]')).not.toExist();
        });
      });
    });
  });
});
