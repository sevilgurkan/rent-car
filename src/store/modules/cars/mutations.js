export default {
  addCar(state, payload) {
    state.cars.push(payload);
  },
  setCars(state, payload) {
    state.cars = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
