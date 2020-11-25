import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { fetchEvents } from './components/events/EventsSlice';
import { fetchTraffic } from './components/traffic/TrafficSlice';
import { fetchConfigurations } from './components/configs/ConfigurationsSlice';
import store from './store';

store.dispatch(fetchEvents());
store.dispatch(fetchTraffic());
store.dispatch(fetchConfigurations());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
