import { useLocation } from "react-router-dom";
import EventsList from "../events/EventsList";

export default function EndpointPage() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Activity Log</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <EventsList endpointId={useLocation().search.slice(4)} />
        </div>
      </div>
    </div>
  );
}
