import React from 'react';
import { shallow, mount } from 'enzyme';
import App from 'views/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = mount(<App />);
  });

  it('renders', () => {
    expect(component.find(App)).toExist();
  });
});
