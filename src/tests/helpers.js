/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount as render } from 'enzyme';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { createMemoryHistory } from 'history';

export default function mount(Component, props = {}, options = {}) {
  const mockStore = configureStore(getDefaultMiddleware({ serializableCheck: false }));
  const history = createMemoryHistory();

  const { route = '/default', state = {} } = options;
  history.push(route);
  const store = mockStore({ ...state });
  store.dispatch = jest.fn();

  const component = render(
    <Provider store={store}>
      <Router history={history}>
        <Component {...props} />
      </Router>
    </Provider>,
  );

  return [component, history, store];
}
