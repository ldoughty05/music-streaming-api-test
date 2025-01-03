import { configureStore } from '@reduxjs/toolkit';

import counterSlice from '../features/counter/counterSlice.js';

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
  },
});
