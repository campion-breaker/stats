import { useEffect } from 'react';
import { fetchConfigurations } from '../configurations/configurationsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Endpoints from './Endpoints';

export default function EndpointsList() {
  const dispatch = useDispatch();
  const configurationsStatus = useSelector((state) => state.configurations.status);
  const configurations = useSelector((state) => {
    return state.configurations.ids.map((id) => state.configurations.entities[id]);
  });

  useEffect(() => {
    if (configurationsStatus === 'idle') {
      dispatch(fetchConfigurations());
    }
  }, [configurationsStatus, dispatch]);

  if (configurationsStatus === 'done') {
    console.log(configurations)
    return (
      <div>
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
          Services Protected by Campion
        </h2>

        <Endpoints items={configurations} />
      </div>
    );
  } else {
    return (
      <div className="flex justify-around mt-4">
        <span className="relative inline-flex rounded-xl shadow-lg">
          <span className="flex absolute h-5 w-5 top-0 right-0 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-purple-500"></span>
          </span>
        </span>
      </div>
    )
  }
}
