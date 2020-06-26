import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    setValue: (counter, action) => {
      const {
        value,
      } = action.payload;
      counter.value = value;
    },
  },
});
export default counterSlice;

export const {
  setValue,
} = counterSlice.actions;

export function selectValue(state) {
  return state.counter.value;
}
