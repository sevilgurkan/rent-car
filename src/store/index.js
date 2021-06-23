import { createStore } from 'vuex';

import carsModule from './modules/cars/index';
import authModule from './modules/auth/index';

const store = createStore({
  modules: {
    cars: carsModule,
    auth: authModule,
  },
});

export default store;
