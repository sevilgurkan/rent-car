export default {
  async addCar(context, data) {
    const { userId } = context.rootGetters;
    const carData = {
      brand: data.first,
      model: data.last,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const { token } = context.rootGetters;

    const response = await fetch(
      `https://DATABASE_URL/cars/${userId}.json?auth=${
        token}`,
      {
        method: 'PUT',
        body: JSON.stringify(carData),
      },
    );

    if (!response.ok) { /* ... */ }

    context.commit('addCar', {
      ...carData,
      id: userId,
    });
  },

  async loadCars(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch('https://DATABASE_URL/cars.json');
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const cars = [];

    Object.keys(responseData).forEach((key) => {
      if (responseData.hasOwnProperty(key)) {
        const coach = {
          id: key,
          brand: responseData[key].brand,
          model: responseData[key].model,
          hourlyRate: responseData[key].hourlyRate,
          areas: responseData[key].areas,
        };
        cars.push(coach);
      }
    });

    context.commit('setCars', cars);
    context.commit('setFetchTimestamp');
  },
};
