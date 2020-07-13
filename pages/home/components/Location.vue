<template>
	<view class="location solid-bottom ">
		<view class="flex justify-between">
			<view class="left">
				<view class="up flex">
					<view class="city" v-if="city!=''">{{city}}</view>
					<view class="city" v-else>定位中...</view>
					<text class="cuIcon-rounddown"  @tap="gotoLunBo"></text>
				</view>
				<view class="temp">
					<text class="iconfont lg temp-icon">&#xe646;</text>
					<template v-if="low!=''&&high!=''">{{wetherType}} <text class="low">{{low}}</text>~<text class="hight">{{high}}</text></template>
					<text v-else>正在获取天气...</text>
				</view>
			</view>
			<view class="right">
				<button class="cu-btn round bg-cyan">
					<text class="cuIcon-camera"></text>
					<text class="text">看旅图</text>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'HomeLocation',
		data() {
			return {
				city: '',
				low: '',
				high: '',
				wetherType: ''
			}
		},
		methods:{
			gotoLunBo() {
				uni.navigateTo({
					url: "/pages/city/city"
				})
			}
		},
		beforeCreate () {
			uni.getLocation({
				geocode: true,
				type: 'gcj02',
				success: (res) => {
					if (res.address) {
						this.city = res.address.city
						uni.request({
							url: 'http://wthrcdn.etouch.cn/weather_mini',
							data: {
								city: this.city
							},
							success: (result) => {
								if (result.statusCode === 200) {
									let data = result.data.data
									let wether = data.forecast
									let today = wether[0]
									this.low = today.low.split(' ')[1]
									this.high = today.high.split(' ')[1]
									this.wetherType = today.type
								}
							}
						})
					}
				}
			})
		}
	}
</script>

<style lang="stylus" scoped>
	.location {
		left: 0;
		height: 200rpx;
		width: 100%;
		color: #fff;
	}

	.up {
		height: 130rpx;
		line-height: 130rpx;
		margin-top: 40rpx;

		.city {
			font-size: 80rpx;
			margin-left: 60rpx;
		}

		.cuIcon-rounddown {
			font-size: 40rpx;
			margin-left: 10rpx;
		}
	}

	.temp {
		font-size: 32rpx;
		margin-left: 60rpx;
	}

	.iconfont,.cuIcon-camera{
		margin-right: 10rpx;
	}
	.right {
		height: 150rpx;
		line-height: 150rpx;
		margin-top: 60rpx;
		right: 0;
		width: 230rpx;
		color: #fff;
		border-radius: 50rpx;
		.text{
			height: 150rpx;
			line-height: 150rpx;
		}
	}
</style>
