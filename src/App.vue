<template>
	<div>
		<tawk-header></tawk-header>
		<tawk-home></tawk-home>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './pages/home/Home.vue';

export default {
	components:{
		'tawk-header': Header,
		'tawk-home': Home,
	}
}
</script>

<style lang="scss" scoped>
	@import 'scss/main.scss';
</style>