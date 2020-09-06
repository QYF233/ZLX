<template>
	<view class="location">
		<view class="flex justify-between">
			<view class="left">
				<view class="up flex">
					<navigator url="/pages/search/searchDetail">
						<view class="city">{{city}}</view>
					</navigator>
					<text class="cuIcon-rounddown" @click.stop="gotoLunBo"></text>
				</view>
				<view class="temp">
					<text class="iconfont lg temp-icon">&#xe646;</text>
					<template v-if="low!=''&&high!=''">{{weatherType}} <text class="low">{{low}}</text>~<text class="hight">{{high}}</text></template>
					<text v-else>正在获取天气...</text>
				</view>
			</view>
			<view class="right">
				<button class="cu-btn round bg-cyan" @tap="gotoPainting">
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
		props: {
			city: String,
			low: String,
			high: String,
			weatherType: String
		},
		data() {
			return {}
		},
		methods: {
			gotoLunBo() {
				uni.navigateTo({
					url: "/pages/home/cityList?city=" + this.city
				})
			},
			gotoPainting() {
				uni.navigateTo({
					url: "/pages/photo/photo",
				})
			}
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

	.iconfont,
	.cuIcon-camera {
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

		.text {
			height: 150rpx;
			line-height: 150rpx;
		}
	}
</style>
