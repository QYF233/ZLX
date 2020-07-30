<template>
	<view class="list">
		<view class="city" v-for="city in list" :key="city.id" @click="choose(city.name)">
			<image :src="city.icon" mode="" class="icon"></image>
			<view class="name">
				{{city.name}}
			</view>
			<view class="current" v-show="city.name===currentCity">
				当前城市
			</view>
		</view>
	</view>
</template>

<script>
	const cityList = require('@/common/json/citys.json').citys
	export default {
		data(){
			return {
				list:[],
				currentCity:''
			}
		},
		onLoad(e) {
			this.list = cityList
			this.currentCity = e.city
		},
		methods:{
			getCityObject(cityName){
				let res = {}
				for (let city of cityList){
					if(city.name === cityName){
						res.name = city.name
						res.id = city.id
						res.backgroundImage = city.backgroundImage
						return res
					}
				}
			},
			choose(name){
				let city = this.getCityObject(name)
				uni.setStorage({
					key:"city",
					data:city
				})
				uni.$emit('homeLoadList',city)
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
	.current {
		position: absolute;
		color: #FFFFFF;
		top: 5rpx;
		right: 5rpx;
	}
	.city{
		margin: 20rpx 10rpx;
		float: left;
		width: 45%;
		text-align: center;
		position: relative;
	}
	.name {
		font-size: 20px;
		font-weight: bold;
		color: #FFFFFF;
		position: absolute;
		top: 5rpx;
		left: 5rpx;
	}
	.icon {
		height: 200rpx;
		border-radius:10px;
	}
	.name {
		margin-left: 20rpx;
	}
</style>
