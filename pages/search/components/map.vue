<template>
	<view class="map-container">
		<view class="distance">
			<text class="iconfont" style="margin-right: 5px;">&#xe622;</text>距离您{{getDistance}}km
		</view>
		<map class="map" :latitude="targetlatitude" :longitude="targetlongitude" :markers="getCovers" scale="12" show-location="true">
		</map>
		
	</view>
</template>

<script>
	export default {
		name:"Map",
		props:{
			currentlongitude:Number,
			currentlatitude:Number,
			targetlongitude:Number,
			targetlatitude:Number
		},
		data() {
			return {
				latitude: 30.244,
				longitude: 120.146, 
				
			}
		},
		computed:{
			getCovers() {
				let covers = []
				covers.push({
					id:1,
					latitude: this.targetlatitude, 
					longitude: this.targetlongitude,
					iconPath:'../../static/image/locationicon1.png'
				})
				covers.push({
					id:2,
					latitude: this.currentlatitude, 
					longitude: this.currentlongitude,
					iconPath:'../../static/image/locationicon.png'	
				})
				return covers
			},
			getDistance() {
				var radLat1 = this.targetlatitude*Math.PI / 180.0; 
				var radLat2 = this.currentlatitude*Math.PI / 180.0; 
				var a = radLat1 - radLat2; 
				var b = this.targetlongitude*Math.PI / 180.0 - this.currentlongitude*Math.PI / 180.0; 
				var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) 
				+ Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2))); 
				s = s *6378.137 ;// EARTH_RADIUS; 
				s = Math.round(s * 10000) / 10000;
				return Math.round(s * 100) / 100;
			}
		}
	}
</script>

<style>
	.map-container {
		margin: 20rpx;	
		background-color: #FFFFFF;
		border-radius: 10rpx;
	}
	.map {
		width: 100%;
		height: 350px;
	}
	.distance { 
		line-height: 40px;
		margin: 10rpx;
	}
</style>
