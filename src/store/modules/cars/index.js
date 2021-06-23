import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      cars: [
        {
          id: 'c1',
          brand: 'BMW',
          model: 'Gran Coupe',
          areas: ['petrol', 'automatic'],
          hourlyRate: 100,
        },
        {
          id: 'c2',
          brand: 'Mercedes-Benz',
          model: 'Cabriolet',
          areas: ['petrol', 'manuel'],
          hourlyRate: 140,
        },
        {
          id: 'c3',
          brand: 'Ford',
          model: 'Ranger',
          areas: ['petrol', 'manuel'],
          hourlyRate: 90,
        },
        {
          id: 'c4',
          brand: 'Volvo',
          model: 'XC90',
          areas: ['petrol', 'automatic'],
          hourlyRate: 145,
        },
        {
          id: 'c5',
          brand: 'Volvo',
          model: 'S60',
          areas: ['petrol', 'manuel'],
          hourlyRate: 125,
        },
        {
          id: 'c6',
          brand: 'BMW',
          model: 'i4 M50',
          areas: ['petrol', 'manuel'],
          hourlyRate: 130,
        },
        {
          id: 'c7',
          brand: 'Mercedes-Benz',
          model: 'A200 Sedan',
          areas: ['petrol', 'automatic'],
          hourlyRate: 125,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
