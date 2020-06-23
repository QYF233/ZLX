<template>
	<view class="location">
		<view class="left">
			<view class="up">
				<view class="city">杭州</view>
				<text class="iconfont">&#xe658;</text>
			</view>
			<view class="temp">
				<text class="iconfont">&#xe646;</text>
				<text class="low">20</text>~<text class="hight">30</text>℃
			</view>
		</view>
		<view class="right"><text class="iconfont">&#xe61c;</text>看旅图</view>
	</view>
</template>

<script>
export default{
	name: 'HomeLocation'
}
</script>

<style>
	.location{
		left: 0;
		display: flex;
		height: 200rpx;
		width: 100%;
		flex-direction: column;
	}
	.up{
		display: flex;
	}
	.city{
		font-size: 80rpx;
		color: #fff;
		margin-left: 60rpx;
		margin-top: 30rpx;
		height: 110rpx;
		line-height: 110rpx;
	}
	.up .iconfont{
		color: #fff;
		margin-top: 30rpx;
		font-size: 40rpx;
		margin-left:10rpx;
		height: 110rpx;
		line-height: 110rpx;
	}
	.temp{
		font-size: 32rpx;
		margin-left: 60rpx;
		color: #fff;
	}
	.temp .iconfont{
		margin-right: 10rpx;
	}
	.right{
		position: absolute;
		right: 0;
		margin: 90rpx 60rpx 0 0;
		height: 60rpx;
		line-height: 60rpx;
		width: 180rpx;
		background-color: #1fb1c1;
		color: #fff;
		font-size: 36rpx;
		border-radius: 50rpx;
		padding: 5rpx 8rpx;
	}
	.right .iconfont{
		margin: 0 10rpx 0 20rpx;
		text-align: center;
	}
</style>
