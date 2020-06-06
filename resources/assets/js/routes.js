import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import DashboardComponent from './components/DashboardComponent'
import LoginComponent from './components/LoginComponent'
import LogoutComponent from './components/LogoutComponent'
import RegisterComponent from './components/RegisterComponent'
import PollsComponent from './components/PollsComponent'
import CreatePollComponent from './components/CreatePollComponent'
import SinglePollComponent from './components/SinglePollComponent'
import LeadersComponent from './components/LeadersComponent'

import store from './store'

const routes = [
    {
        path: '/',
        redirect: { name: 'login' }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardComponent,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent
    },
    {
        path: '/logout',
        name: 'logout',
        component: LogoutComponent
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterComponent
    },
    {
        path: '/polls',
        name: 'polls',
        component: PollsComponent
    },
    {
        path: '/createPoll',
        name: 'createPoll',
        component: CreatePollComponent,
        meta: { requiresAuth: true }
    },
    {
        path: '/getpoll/:id',
        name: 'getPoll',
        component: SinglePollComponent

    },
    {
        path: '/leaders',
        name: 'leaders',
        component: LeadersComponent
    },
    {
        path: '/leader',
        name: 'leader',
        component: SingleLeaderComponent
    },
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {

    // check if the route requires authentication and user is not logged in
    if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
        // redirect to login page
        next({ name: 'login' })
        return
    }

    // if logged in redirect to dashboard
    if(to.path === '/login' && store.state.isLoggedIn) {
        next({ name: 'dashboard' })
        return
    }

    next()
});

export default router
