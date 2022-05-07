<template>
	<div class="container" id="app">
		<News></News>
	</div>
</template>

<script>
import News from './components/News.vue'

export default {
	name: 'app',
	components: {
		News
	}
}
</script>

<style>
#app {
	padding-top: 20px;
}
</style>
