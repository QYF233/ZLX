<template>
	<view class="content">
		<home-header></home-header>
	</view>
</template>

<script>
	import HomeHeader from './components/Header'
	export default {
		name: 'Home',
		components: {
		  HomeHeader
		},
		data() {
			return {
				title: ''
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		background-color: #CCCCCC;
	}
</style>
