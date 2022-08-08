import { render } from '@testing-library/react';
import './testing/mockRedux.js';
import { MemoryRouter as Router } from 'react-router-dom';

import { App } from './app.js';

import {
  selectValue,
} from './features/counter/counterSlice.js';
jest.mock('./features/counter/counterSlice.js', () => ({
  selectValue: jest.fn().mockName('selectValue'),
}));

describe('the app', () => {
  test('has one labeled button that displays the value from the store', () => {
    selectValue.mockReturnValue(9999);
    const { container } = render(
      <Router initialEntries={['/']}>
        <App />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
