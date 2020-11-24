import { userAPI } from "./userAPI";
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const eventsAdapter = createEntityAdapter({
  selectId: (event) => event.TIME,
  sortComparer: (a, b) => b.TIME - a.TIME,
});

export const fetchEvents = createAsyncThunk(
  "events/fetchAllEventsStatus",
  async (arg, thunkAPI) => {
    const response = await userAPI.getAllEvents();
    const data = await response.json();
    return data;
  }
);

const addEventsToServicesState = (state, action) => {
  let endpoints = {};

  for (let i = 0; i < action.payload.length; i++) {
    const event = action.payload[i];
    const id = endpoints[event.ID];

    if (id) {
      id.push(event);
    } else {
      endpoints[event.ID] = [];
      endpoints[event.ID].push(event);
    }
  }

  Object.keys(endpoints).forEach((key) =>
    endpoints[key].sort((a, b) => b.TIME - a.TIME)
  );

  state.endpoints = endpoints;
};

const eventsSlice = createSlice({
  name: "events",
  initialState: eventsAdapter.getInitialState({ status: "idle", error: null, endpoints: {} }),
  reducers: {},
  extraReducers: {
    [fetchEvents.fulfilled]: (state, action) => {
      eventsAdapter.addMany(state, action.payload);
      addEventsToServicesState(state, action);
      state.status = "done";
    },
    [fetchEvents.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchEvents.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default eventsSlice.reducer;

export const { selectAll: selectAllEvents } = eventsAdapter.getSelectors(
  (state) => state.events
);
