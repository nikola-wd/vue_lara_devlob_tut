<template>
	<div class="col-md-4">
		<div class="thumbnail">
			<img src="http://placehold.it/100x100" alt="" />

			<div class="caption">
				<h3>{{ product.name }}</h3>
				<p>{{ product.price }}</p>
			</div>

			<hr>

			<p>
				<a href="#" class="btn btn-default">Wish list</a>
				<a href="#" class="btn btn-success">Buy</a>
			</p>
		</div>
	</div>
</template>




<script>
	export default {
		props: ['product']
	}
</script>




<style>
	
</style>