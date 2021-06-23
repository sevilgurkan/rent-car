// import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import CarsList from './pages/cars/CarsList.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index';

const CarDetail = () => import('./pages/cars/CarDetail.vue');
const ContactSeller = () => import('./pages/requests/ContactSeller.vue');
const NotFound = () => import('./pages/NotFound.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/cars' },
    { path: '/cars', component: CarsList },
    {
      path: '/cars/:id',
      component: CarDetail,
      name: 'card-detail',
      props: true,
      children: [
        { path: 'contact', component: ContactSeller, name: 'contact-seller' },
      ],
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/cars');
  } else {
    next();
  }
});

export default router;
