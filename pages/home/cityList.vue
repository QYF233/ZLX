<template>
	<view class="list">
		<view class="city" v-for="(city,index) in list" :key="index" @click="choose(city.name)">
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
	export default {
		data(){
			return {
				list:[],
				currentCity:''
			}
		},
		onLoad(e) {
			uni.request({
				url:this.websiteUrl + 'city/listcity',
				success: (res) => {
					this.list = res.data
				}
			})
			// this.list = cityList
			this.currentCity = e.city
		},
		methods:{
			getCityObject(cityName){
				uni.request({
					url:this.websiteUrl + 'city/getcity?name=' + cityName,
					success: (res) => {
						var city = {
							id:res.data.id,
							name:res.data.name,
							backgroundImage:res.data.backgroundPicture
						}
						uni.setStorage({
							key:"city",
							data:city
						})
						uni.$emit('homeLoadList',city)
					}
				})
			},
			choose(name){
				this.getCityObject(name)
				
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
