/* eslint-disable vue/html-indent */
<template>
	<h1>Ninja reaction timer</h1>
	<button @click="start" :disabled="isStart">play</button>
	<Block v-if="isStart" :delay="delay" @end="endGame" />
	<Results v-if="showScore" :score="score" />
</template>

<script>
import Block from './components/Block.vue';
import Results from './components/Results.vue';
export default {
	components: { Block, Results },
	name: 'App',
	data() {
		return {
			isStart: false,
			delay: null,
			score: null,
			showScore: false,
		};
	},
	methods: {
		start() {
			this.isStart = true;
			this.delay = 2000 + Math.random() * 5000;
			this.showScore = false;
			this.score = null;
		},
		endGame(reactionTime) {
			this.isStart = false;
			this.score = reactionTime;
			this.showScore = true;
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #444;
	margin-top: 60px;
}
</style>
