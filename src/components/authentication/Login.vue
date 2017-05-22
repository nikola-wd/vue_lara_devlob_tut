<template>

	<div class="row">
		<div class="col-md-6 col-md-offset-3">
			<div class="panel panel-default">
				<div class="panel-body">
					<div class="form-group">
						<input
							v-model="email" 
							class="form-control"
							type="email" 
							placeholder="Email" />
					</div>
					<div class="form-group">
						<input
							v-model="password" 
							class="form-control"
							type="password" 
							placeholder="Password" />
					</div>

					<button 
						class="btn btn-success pull-right"
						@click="login"> <!-- call login method on click -->
						Login
					</button>
				</div><!-- p-body -->
			</div><!-- panel -->
		</div><!-- col -->
	</div><!-- row -->

</template>







<script>
	export default {
		data() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			login() {
				var data = {
					client_id: 2,
					client_secret: 'EG0CUenVvmgjMjIwP9bMRsmc7aDKzFY8cnJkusvt',
					grant_type: 'password',
					username: this.email,
					password: this.password,
				};

				this.$http.post('http://127.0.0.1:8000/oauth/token', data) // post data
					.then(response => {
					   this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now());
					   console.log(response);
					}); // end:then
			} // login()
		}
	}
</script>







<style>
	
</style>