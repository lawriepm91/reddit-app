import mount from 'tests/helpers';
import App from 'views/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    [component] = mount(App);
  });

  it('renders', () => {
    expect(component.find(App)).toExist();
  });

  describe('at', () => {
    describe('"/" route', () => {
      it('renders <List />', () => {
        expect(component.find('List')).toExist();
      });
    });

    describe('"/pics" route', () => {
      it('renders <List />', () => {
        expect(component.find('List')).toExist();
      });
    });
  });
});
