// custom auth package
export default function(Vue) {
	
	Vue.auth = {
		// set token
		setToken: (token, expiration) => {
			localStorage.setItem('token', token)
			localStorage.setItem('expiration', expiration)
		},


		// get token
		getToken: () => {

		},


		// destroy token


		// isAuthenticated
		isAuthenticated: () => {
			if(this.getToken()) {
				return true;
			} else {
				return false;
			}
		}
	} // Vue.auth


	Object.defineProperties(Vue.prototype, {
		$auth: {
			get: () => {
				return Vue.auth
			}
		}
	})
}