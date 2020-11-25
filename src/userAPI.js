export const userAPI = {
  getAllEvents() {
    return fetch('http://localhost:7777/events');
  },

  getAllTraffic() {
    return fetch('http://localhost:7777/traffic');
  },

  getAllEndpoints() {
    return fetch('http://localhost:7777/endpoints');
  },
};
