import React from 'react';
import { create } from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import App from '../App';
import { history } from '../../store';
import mockStoreData from '../../store';
import * as api from '../../moltin';

jest.mock('../../store');
jest.mock('../../moltin');

const middleware = [thunk.withExtraArgument(api), routerMiddleware(history)];
const mockStore = configureStore(middleware);
const initialState = {};
const store = mockStore(mockStoreData);

describe('App', () => {
  test('it matches the snapshot', () => {
    const component = create(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <App />
          </div>
        </ConnectedRouter>
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
