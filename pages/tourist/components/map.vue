<template>
	<view class="map-container">
		<view class="distance">
			<text class="iconfont" style="margin-right: 5px;">&#xe622;</text>距离您1000km
		</view>
		<map class="map" :latitude="latitude" :longitude="longitude" :markers="covers" scale="12">
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
			targetlatitude:Number,
			// covers:Array
		},
		data() {
			return {
				id:0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 30.244,
				longitude: 120.146, 
				covers: [{
					id:1,
					latitude: 30.244, 
					longitude: 120.146, 
					iconPath:'../../static/image/locationicon.png',
				}]
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
		height: 400px;
	}
	.distance { 
		line-height: 40px;
		margin: 10rpx;
	}
</style>
