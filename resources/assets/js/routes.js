import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

// export default new Router({
//   mode: 'hash',
//   base: process.env.BASE_URL,
  
// });

// import Vue from 'vue'
// import Router from 'vue-router'

import store from './store'

// Vue.use(Router);

const router = new Router({
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
      component: () => import('./components/CreatePollComponent.vue'),
      meta: { requiresAuth: true}
    },
    {
      path: '/singlePoll/:id',
      name: 'singlePoll',
      component: () => import('./components/SinglePollComponent.vue')
    },
    {
      path: '/allResults',
      name: 'allResults',
      component: () => import('./components/allResultsApp.vue')
    },
    {
      path: '/allPolls',
      name: 'allPolls',
      component: () => import('./components/allPollsApp.vue')

    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('./components/LogoutComponent.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./components/AccountComponent.vue'),
      meta: { requiresAuth: true}
    },
    {
      path: '/showLeaders',
      name: 'showLeaders',
      component: () => import('./components/ShowLeadersComponent.vue'),
      // meta: { requiresAuth: true}
    }
  ]
});

router.beforeEach((to, from, next) => {

    // check if the route requires authentication and user is not logged in
    if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
        // redirect to login page
        alert('Необходимо войти в систему!')
        next({ name: 'mainContent' })
        return
    }

    next()
});

export default router