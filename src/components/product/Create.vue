<template>
	<div class="row">
		<div class="col-md-8 col-md-offset-2">
			<div class="panel panel-default">
				<div class="panel-body">
					<form @submit.prevent="create">
						<div class="form-group">
						<label>Name:</label>
						<input 
							name="name" 
							type="text" 
							class="form-control" 
							v-validate="'required'"
							v-model="product.name" />
						<div class="help-block alert alert-danger" 
							v-show="errors.has('name')">
							{{ errors.first('name') }}
						</div>
					</div>

					<div class="form-group">
						<label>Price:</label>
						<input 
							name="price" 
							type="number" 
							class="form-control" 
							v-validate="'max_value:50|min_value:1'"
							v-model="product.price" />
						<div class="help-block alert alert-danger" 
							v-show="errors.has('price')">
							{{ errors.first('price') }}
						</div>
					</div>

					<div class="form-group">
						<label>Description:</label>
						<textarea 
							name="description"
							class="form-control" 
							v-validate="'required'"
							v-model="product.description"></textarea>
						<div class="help-block alert alert-danger" 
							v-show="errors.has('description')">
							{{ errors.first('description') }}
						</div>
					</div>

						<input 
							type="submit" 
							class="btn btn-success btn-block"
							value="Create" />
					</form>
				</div>
			</div>
		</div>
	</div>
</template>











<script>
	export default {
		data() {
			return {
				product: {
					name: '',
					price: 0,
					description: ''
				}
			}
		},

		methods: {
			create() {
				this.$validator.updateDictionary({
					'sr_RS' : {
						attributes: {
							name: 	     'ime',
							price: 	    'cena',
							description: 'opis'
						}
					}
				});

				this.$validator.setLocale('sr_RS');

				this.$validator.validateAll().then(() => {
					this.$http.post('api/products', this.product)
					.then(response => {
						this.$router.push('/feed'); // redirect after sucessful creation
					})
				});
			}
		}
	}
</script>