import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mainContent',
      component: () => import('./components/MainContent.vue')
    },
    {
      path: '/createPoll',
      name: 'createPoll',
      component: () => import('./components/CreatePollComponent.vue')
    },
    {
      path: '/singlePoll/:id',
      name: 'singlePoll',
      component: () => import('./components/SinglePollComponent.vue')
    },
  ]
});
