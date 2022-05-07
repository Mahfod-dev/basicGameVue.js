<template>
	<h1>Result: {{ score }}</h1>
	<p>...{{ rank }}...</p>
</template>
<script>
export default {
	props: ['score'],
	data() {
		return {
			rank: null,
		};
	},
	mounted() {
		if (this.score < 250) {
			this.rank = 'Ninja fingers';
		} else if (this.score < 400) {
			this.rank = 'Rapid reflex';
		} else {
			this.rank = 'Snail pace...';
		}
	},
};
</script>
