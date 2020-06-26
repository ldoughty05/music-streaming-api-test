/* eslint-disable no-magic-numbers */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '../../testing/mockRedux.js';

import { Counter } from './counter.js';

import {
  selectValue,
  setValue,
} from './counterSlice.js';
jest.mock('./counterSlice.js', () => ({
  selectValue: jest.fn().mockName('selectValue'),
  setValue: jest.fn().mockName('setValue'),
}));

describe('the button', () => {
  test('displays the value from the store', () => {
    selectValue.mockReturnValue(9999);
    render(<Counter label={'Foo'} />);
    expect(screen.getByRole('button')).toHaveTextContent(/^9999$/);
  });
  test('is red when the value from the store is even', () => {
    selectValue.mockReturnValue(9998);
    render(<Counter label={'Foo'} />);
    expect(screen.getByRole('button')).toHaveClass('red');
  });
  test('is blue when the value from the store is odd', () => {
    selectValue.mockReturnValue(9999);
    render(<Counter label={'Foo'} />);
    expect(screen.getByRole('button')).toHaveClass('blue');
  });
  test('increments the value in the store when clicked', () => {
    selectValue.mockReturnValue(9999);
    render(<Counter label={'Foo'} />);
    userEvent.click(screen.getByRole('button'));
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith({
      value: 9999 + 1,
    });
  });
});
