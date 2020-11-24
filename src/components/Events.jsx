import moment from "moment";
import { useEffect } from "react";
import { fetchEvents, selectAllEvents } from "./EventsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Events() {
  const dispatch = useDispatch();
  const eventStatus = useSelector((state) => state.events.status);
  const events = useSelector(selectAllEvents);

  useEffect(() => {
    if (eventStatus === "idle") {
      dispatch(fetchEvents());
    }
  }, [eventStatus, dispatch]);

  let tableRow;

  if (eventStatus === "pending") {
    return (
      <div className="border border-light-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-light-blue-400 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-light-blue-400 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-light-blue-400 rounded"></div>
              <div className="h-4 bg-light-blue-400 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (eventStatus === "done") {
    tableRow = events.map((event) => {
      return (
        <tr key={event.TIME}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm font-medium text-gray-900">
              {moment(event.TIME).fromNow()}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{event.NAME}</div>
            <div className="text-sm text-gray-500">{event.ID}</div>
          </td>
          <td className="px-6 py-4">
            <div className="text-sm text-gray-500">
              {event.EVENT === "STATE_CHANGE"
                ? "Circuit-Breaker Status Change"
                : "Configuration Change"}
            </div>
          </td>
          <td className="px-6 py-4 text-sm text-gray-500">
            {event.EVENT === "STATE_CHANGE"
              ? `Circuit-breaker flipped from ${event.OLD_STATE} to ${
                  event.NEW_STATE
                }. This was ${
                  event.MODE === "AUTO" ? "an automatic" : "a manual"
                } change.`
              : `Circuit-breaker configuration settings were ${
                  event.METHOD === "ADD" ? "added" : "changed"
                }.`}
          </td>
        </tr>
      );
    });
  }

  return (
    <tbody className="bg-white divide-y divide-gray-200">{tableRow}</tbody>
  );
}
