import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // your reducers here
  },
});

export { store };