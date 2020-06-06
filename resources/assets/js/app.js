
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import router from './routes.js';
import AppComponent from './components/AppComponent'
import Vuetify from '../../plugins/vuetify'
import HeaderComponent from './components/HeaderComponent'

// import store from '../store'
import VueSession from 'vue-session'
Vue.use(VueSession)

const app = new Vue({
	vuetify: Vuetify,
    components: { AppComponent, HeaderComponent },
    router
}).$mount('#app')
