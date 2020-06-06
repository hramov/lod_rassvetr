
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
import Vuetify from './vuetify'
import App from './App'
import store from './store'

new Vue({
	vuetify: Vuetify,
	render: h => h(App),
    router,
    store
}).$mount('#app')
