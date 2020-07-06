<template>
	<view>
		<view class="content">
			<view class="status_bar">
				<!-- 这里是状态栏 -->
			</view>
			<home-header></home-header>
			<home-location></home-location>
			<home-icon></home-icon>
			<home-find></home-find>
		</view>
	</view>
</template>

<script>
	import HomeHeader from './components/Header'
	import HomeLocation from './components/Location'
	import HomeIcon from './components/Icon'
	import HomeFind from './components/Find'
	import HomeSearch from './components/Search'
	
	export default {
		name: 'Home',
		components: {
			HomeHeader,
			HomeLocation,
			HomeIcon,
			HomeFind
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
		background: url('~@/static/image/xihu2.png');
		background-repeat: no-repeat;
		background-size: contain;
	}
</style>
