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
  },
  reducers: {},
  extraReducers: {
    /* eslint-disable */
    [fetchList.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
     /* eslint-enable */
  },
});

export default ListSlice.reducer;
