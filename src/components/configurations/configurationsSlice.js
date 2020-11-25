import { userAPI } from '../../userAPI';
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

const configurationsAdapter = createEntityAdapter({
  selectId: (config) => config.ID,
  sortComparer: (a, b) => b.TIME - a.TIME,
});

export const fetchConfigurations = createAsyncThunk(
  'configurations/fetchAllConfigurationStatus',
  async (arg, thunkAPI) => {
    const response = await userAPI.getAllEndpoints();
    const data = await response.json();
    return data;
  }
);

const configurationsSlice = createSlice({
  name: 'configurations',
  initialState: configurationsAdapter.getInitialState({
    status: 'idle',
    error: null,
  }),
  reducers: {},
  extraReducers: {
    [fetchConfigurations.fulfilled]: (state, action) => {
      configurationsAdapter.addMany(state, action.payload);
      state.status = 'done';
    },
    [fetchConfigurations.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchConfigurations.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default configurationsSlice.reducer;

export const {
  selectAll: selectAllConfigurations,
} = configurationsAdapter.getSelectors((state) => state.configurations);
