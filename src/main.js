import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'

import Auth from './packages/auth/Auth.js'

Vue.use(VueResource)
Vue.use(Auth)
Vue.use(VeeValidate)

// define root of the app
Vue.http.options.root = 'http://127.0.0.1:8000';

// send token to laravel to be able to authenticate and get api data
// Vue.http.headers.common['Authorization'] = 'Bearer' + Vue.auth.getToken();

Vue.http.interceptors.push((request, next) => {
	request.headers.set('Authorization', 'Bearer ' + Vue.auth.getToken())
	next()
});




// interceptors (in between every request, response), global, works in every component
Vue.http.interceptors.push((request, next) => {
	next(response => {
		if(response.status == 404) {
			swal(response.status.toString(), response.body.error, 'error');
		} else if(response.status == 500) {
			swal(response.status.toString(), 'We are experiencing a problem with our servers!', 'error');
		}
	})
});




// create nav guard 
Router.beforeEach(
	(to, from, next) => {
		//whenever nav is triggered
		if(to.matched.some(record => record.meta.forVisitors)) {
			if(Vue.auth.isAuthenticated()) {
				next({
					path: '/feed'
				})
			} else next()
		} 

		else if(to.matched.some(record => record.meta.forAuth)) {
			if(!Vue.auth.isAuthenticated()) {
				next({
					path: '/login'
				})
			} else next()
		}

		else next()
	}
)



new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})


