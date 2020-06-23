<template>
	<view class="content">
		<home-header></home-header>
		<home-location></home-location>
		<home-icon></home-icon>
	</view>
</template>

<script>
import HomeHeader from './components/Header'
import HomeLocation from './components/Location'
import HomeIcon from './components/Icon'
export default {
	name: 'Home',
	components: {
	  HomeHeader,
	  HomeLocation,
	  HomeIcon
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
		flex-direction: column;
		background-color: #CCCCCC;
		background-image: url('~@/static/xihu.jpg');
		background-repeat:no-repeat;
		background-size: cover;
		padding-top: 50rpx;
	}
</style>
