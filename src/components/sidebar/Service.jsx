import { Link } from "react-router-dom";

export default function Service({
  endpointId,
  name,
  search,
  active,
  inactive,
}) {
  return (
    <Link
      to={`/endpoints/?id=${endpointId}`}
      className={search === `?id=${endpointId}` ? active : inactive}
    >
      <svg
        className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
        />
      </svg>
      {name}
    </Link>
  );
}
