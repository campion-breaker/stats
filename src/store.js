import { configureStore } from '@reduxjs/toolkit';

import eventsReducer from './components/EventsSlice';

export default configureStore({
  reducer: {
    events: eventsReducer,
  }
});
