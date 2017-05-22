import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import VueResource from 'vue-resource'

import Auth from './packages/auth/Auth.js'

Vue.use(VueResource)
Vue.use(Auth)

// define root of the app
Vue.http.options.root = 'http://127.0.0.1:8000';

// send token to laravel to be able to authenticate and get api data
// Vue.http.headers.common['Authorization'] = 'Bearer' + Vue.auth.getToken();

Vue.http.interceptors.push((request, next) => {
	request.headers.set('Authorization', 'Bearer ' + Vue.auth.getToken())
	next()
})




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


