export default {
  cars(state) {
    return state.cars;
  },
  hasCars(state) {
    return state.cars && state.cars.length > 0;
  },
  isCar(_, getters, _2, rootGetters) {
    const { cars } = getters;
    const { userId } = rootGetters;
    return cars.some((car) => car.id === userId);
  },
  shouldUpdate(state) {
    const { lastFetch } = state;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
};
