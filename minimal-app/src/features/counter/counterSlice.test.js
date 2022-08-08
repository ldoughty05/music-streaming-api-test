import counterSlice, {
  selectValue,
  setValue,
} from './counterSlice.js';

describe('the initial state', () => {
  test('has a value of zero', () => {
    const state = counterSlice.reducer(undefined, {});
    expect(state).toEqual({
      value: 0,
    });
  });
});

describe('selectValue', () => {
  test('reads the stored value', () => {
    const state = {
      value: 9999,
    };
    const result = selectValue({ [counterSlice.name]: state });
    expect(result).toBe(9999);
  });
});

describe('setValue', () => {
  test('overwrites the stored value', () => {
    const state = counterSlice.reducer({
      value: 8888,
    }, setValue({
      value: 9999,
    }));
    expect(state).toEqual({
      value: 9999,
    });
  });
});
