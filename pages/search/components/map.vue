<template>
	<view class="map-container">
		<map class="map" :latitude="targetlatitude" :longitude="targetlongitude" scale="12" show-location="true">
		</map>
		
	</view>
</template>

<script>
	export default {
		name:"Map",
		props:{
			targetlongitude:Number,
			targetlatitude:Number,
		},
		data() {
			return {
				latitude: 30.244,
				longitude: 120.146, 
				
			}
		},
		computed:{
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
		height: 500px;
	}
	.distance { 
		line-height: 40px;
		margin: 10rpx;
	}
</style>
