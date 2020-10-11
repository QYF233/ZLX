<template>
	<view>
		<detail-map :targetlatitude="currentlatitude"
		 :targetlongitude="currentlongitude"></detail-map>
	</view>
</template>

<script>
	import DetailMap from './components/map.vue'
	export default {
		components:{
			DetailMap
		},
		data() {
			return {
				spot:{},
				currentlongitude:122, //经度
				currentlatitude:28,	//纬度
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

</style>
