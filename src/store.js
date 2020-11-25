import { configureStore } from '@reduxjs/toolkit';

import eventsReducer from './components/events/EventsSlice';
import trafficReducer from './components/traffic/TrafficSlice';
import configurationsReducer from './components/configurations/configurationsSlice';

export default configureStore({
  reducer: {
    events: eventsReducer,
    traffic: trafficReducer,
    configurations: configurationsReducer,
  },
});
