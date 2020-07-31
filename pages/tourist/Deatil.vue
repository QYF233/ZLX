<template>
	<view class="container">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="detail">
			<images :images="spot.images"></images>
			<info :spot="spot"></info>
		</view>
		
	</view>
</template>

<script>
	import Images from './components/images.vue'
	import Info from './components/Info.vue'
	const data = require('@/common/json/spotDetail.json')
	export default{
		components:{
			Images,
			Info
		},
		data() {
			return {
				spot:{}
			}
		},
		onLoad() {
			this.spot = data.spot
		}
	}
</script>

<style>
	.detail{
		position: relative;
	}
</style>
