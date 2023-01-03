import { configureStore } from '@reduxjs/toolkit';
import ListSlice from './ListSlice';
import SingleSlice from './SingleSlice';

const store = configureStore({
  reducer: {
    list: ListSlice,
    single: SingleSlice,
  },
});

export default store;
