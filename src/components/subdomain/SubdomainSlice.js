import { userAPI } from '../../userAPI';
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const fetchSubdomain = createAsyncThunk(
  'configurations/fetchSubdomainStatus',
  async (arg, thunkAPI) => {
    const response = await userAPI.getSubdomain();
    const data = await response.json();
    return data;
  }
);

const subdomainSlice = createSlice({
  name: 'subdomain',
  initialState: {
    status: 'idle',
    error: null,
    subdomain: '',
  },
  reducers: {},
  extraReducers: {
    [fetchSubdomain.fulfilled]: (state, action) => {
      state.status = 'done';
      state.subdomain = action.payload;
    },
    [fetchSubdomain.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchSubdomain.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default subdomainSlice.reducer;
