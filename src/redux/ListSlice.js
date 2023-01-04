import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchList = createAsyncThunk(
  'list/fetchList',
  async () => {
    const response = await fetch('https://api.coinstats.app/public/v1/coins/');
    const data = await response.json();
    return data.coins;
  },
);

const ListSlice = createSlice({
  name: 'list',
  initialState: {
    list: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: {
    /* eslint-disable */
    [fetchList.pending]: (state) => {
      state.loading = true;
    },
    [fetchList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [fetchList.fulfilled]: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
     /* eslint-enable */
  },
});

export default ListSlice.reducer;
