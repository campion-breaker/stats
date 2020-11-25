import { useEffect } from 'react';
import { fetchEvents, selectAllEvents } from '../events/EventsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Endpoints from './Endpoints';

export default function EndpointsList() {
  const dispatch = useDispatch();
  const eventsStatus = useSelector((state) => state.events.status);
  const events = useSelector((state) => {
    const endpoints = state.events.endpoints;
    return Object.keys(endpoints).map((endpoint) => endpoints[endpoint][0]);
  });

  useEffect(() => {
    if (eventsStatus === 'idle') {
      dispatch(fetchEvents());
    }
  }, [eventsStatus, dispatch]);

  if (eventsStatus === 'done') {
    return (
      <div>
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
          Services Protected by Campion
        </h2>

        <Endpoints items={events} />
      </div>
    );
  } else {
    return null;
  }
}
