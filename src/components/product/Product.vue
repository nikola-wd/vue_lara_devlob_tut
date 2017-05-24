<template>
	<div class="col-md-4">
		<div class="thumbnail">
			<img src="http://placehold.it/100x100" alt="" />

			<div class="caption">
				{{ product.user_id }}

				<h3>{{ product.name }}</h3>
				<p>{{ product.price }}</p>
			</div>

			<hr>

			<p>
				<a href="#" class="btn btn-default">Wish list</a>
				<a href="#" class="btn btn-success">Buy</a>
			</p>

			<hr>

			<p v-if="product.user_id == authenticatedUser.id">
				<a href="#" 
					class="btn btn-danger" 
					role="button"
					@click="$emit('delete-product')"> <!-- we use emit to alert the parent component so the actual product will be deleted form the DOM as well -->
						Delete
				</a>
			</p>
		</div>
	</div>
</template>




<script>
	export default {
		props: ['product', 'authenticatedUser'] // expects authenticatedUser that is defined in Products component
	}
</script>




<style>
	
</style>