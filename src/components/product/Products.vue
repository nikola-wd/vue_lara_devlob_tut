<template>
	<div class="row">
		<my-product 
			v-for="product in products"
			:authenticatedUser="authenticatedUser"
			:product="product">
		</my-product>
	</div>
</template>









<script>
	import Product from './Product.vue';

	export default {
		data() {
			return {
				products: []
			}

		},


		computed: {
			authenticatedUser() {
				return this.$auth.getAuthenticatedUser() // comp props observes for changes and react
			}
		},


		components: {
			'my-product' : Product
		},

		// life-cycle hook
		created() {
			this.$http.get('api/products')
				.then(response => {
					this.products = response.body
				})
		}
	}
</script>