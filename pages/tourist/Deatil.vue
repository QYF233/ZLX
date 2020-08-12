<template>
	<view class="container">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="detail">
			<images :images="spot.images"></images>
			<info :spot="spot"></info>
			<detail-map :targetlatitude="spot.latitude" :targetlongitude="spot.longitude"
						:currentlatitude="currentlatitude" :currentlongitude="currentlongitude"></detail-map>
		</view>
		
	</view>
</template>

<script>
	import Images from './components/images.vue'
	import Info from './components/Info.vue'
	import DetailMap from './components/map.vue'
	export default{
		components:{
			Images,
			Info,
			DetailMap
		},
		data() {
			return {
				spot:{},
				currentlongitude:0, //经度
				currentlatitude:0,	//纬度
			}
		},
		onLoad(e) {
			uni.request({
				url:this.websiteUrl + '/spot/getspot?id=' + e.id,
				success: (res) => {
					this.spot = res.data
				}
			})
			this.currentlatitude = 30.209759
			this.currentlongitude = 120.230426
			uni.getLocation({
				type:'gcj02',
				success: (res) => {
					this.currentlatitude = res.latitude
					this.currentlongitude = res.longitude
				}
			})
		}
	}
</script>

<style>
	.detail{
		position: relative;
	}
</style>
