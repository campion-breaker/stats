import { useEffect } from 'react';
import { fetchConfigurations } from '../configurations/configurationsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Endpoints from './Endpoints';
import Loader from '../loader/loader';

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
      <Loader />
    )
  }
}
