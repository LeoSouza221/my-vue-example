import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/app/Main.vue'),
      name: 'Main',
    },
  ],
});

export default router;
