export const userAPI = {
  getAllEvents() {
    return fetch("http://localhost:7777/events");
  }
};
