import React from 'react';
import { create } from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import mockStoreData from '../../../store';

jest.mock('../../../store');
jest.mock('../../../moltin');

import SingleProduct from '../SingleProduct';

const middlewares = [];
const mockStore = configureStore(middlewares);

// You would import the action from your codebase in a real scenario
const addTodo = () => ({ type: 'ADD_TODO' });

const initialState = {};
const store = mockStore(mockStoreData);
store.dispatch(addTodo());

describe('SingleProduct', () => {
  test('it matches the snapshot', () => {
    const component = create(<SingleProduct store={store} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
