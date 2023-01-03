import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSingle = createAsyncThunk(
  'single/fetchSingle',
  async (id) => {
    const response = await fetch(
      `https://api.coinstats.app/public/v1/coins/${id}`,
    );
    const data = await response.json();
    return data.coin;
  },
);

const SingleSlice = createSlice({
  name: 'single',
  initialState: {
    single: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: {
    /* eslint-disable */
    [fetchSingle.pending]: (state) => {
      state.loading = true;
    },
    [fetchSingle.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [fetchSingle.fulfilled]: (state, action) => {
      state.loading = false;
      state.single = action.payload;
    },
    /* eslint-enable */
  },
});

export default SingleSlice.reducer;
