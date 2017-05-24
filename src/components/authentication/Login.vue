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
					client_secret: '0NN5vlmDMkdmC7ROE7gaWqB1PPjYsA9t6i24WTVZ',
					grant_type: 'password',
					username: this.email,
					password: this.password,
				}

				this.$http.post('oauth/token', data) // post data
					.then(response => {
					   this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now());

					   // after user is authenticated redirect to /feed
					   this.$router.push('/feed');
					}); // end:then
			} // login()
		}
	}
</script>







<style>
	
</style>