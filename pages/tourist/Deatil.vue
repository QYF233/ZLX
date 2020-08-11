<template>
	<view class="container">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="detail">
			<images :images="spot.images"></images>
			<info :spot="spot"></info>
			<detail-map></detail-map>
		</view>
		
	</view>
</template>

<script>
	import Images from './components/images.vue'
	import Info from './components/Info.vue'
	import DetailMap from './components/map.vue'
	const data = require('@/common/json/spotDetail.json')
	export default{
		components:{
			Images,
			Info,
			DetailMap
		},
		data() {
			return {
				spot:{},
				
			}
		},
		onLoad(e) {
			this.spot = data.spot
			
		}
	}
</script>

<style>
	.detail{
		position: relative;
	}
</style>
