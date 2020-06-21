<template>
	<view class="content">
		<home-header></home-header>
		<home-location></home-location>
	</view>
</template>

<script>
import HomeHeader from './components/Header'
import HomeLocation from './components/Location'
export default {
	name: 'Home',
	components: {
	  HomeHeader,
	  HomeLocation
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
		background-image: url(../../static/xihu.jpg);
		background-repeat:no-repeat;
		background-size: contain;
	}
</style>
