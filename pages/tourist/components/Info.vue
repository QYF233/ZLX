<template>
	<view class="info">
		<view class="top">
			<view class="left">
				<h1>{{spot.title}}</h1>
				<text class="tags">“{{spot.tags}}”</text>
			</view>
			<view class="right">
				<view class="right_top">
					<view class="score">{{spot.score}}</view>
					<view class="total">
						/5
					</view>
				</view>
				<view class="right_bottom">
					共{{spot.commentCount}}条评论<text class="iconfont">&#xe628;</text>
				</view>
			</view>
		</view>
		<view class="mid">
			<text class="iconfont">&#xe606;</text><text class="time">{{spot.openTime}}</text>
		</view>
		<view class="bottom">
			<text class="iconfont">&#xe612;</text><text class="address">{{spot.address}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			spot:Object
		}
	}
</script>

<style>
	.info {
		margin: 0 20rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
	}
	h1{
		font-size: 26px;
	}
	.top {
		padding: 20rpx;
		margin: 20rpx 0;
		display: flex;
	}
	.left {
		width: 65%;
		border-right: 1px solid #E5E5E5;
	}
	.right {
		width: 34%;
	}
	.total {
		line-height: 35px;
		padding-left: 5rpx;
		color: #B5B5B5;
	}
	.score {
		color: #0081FF;
		font-size: 26px;
		font-weight: bold;
	}
	.right_top{
		display: flex;
		padding-left: 50rpx;
	}
	.right_bottom {
		font-size: 12px;
		padding-left: 25rpx;
	}
	.tags{
		color: #007AFF;
	}
	.mid {
		margin: 10rpx 20rpx;
		border-top: 1px solid #F5F5F5;
		border-bottom: 1px solid #F5F5F5;
		line-height: 80rpx;
		height: 80rpx;
	}
	.bottom {
		margin: 10rpx 20rpx;
		line-height: 80rpx;
		height: 80rpx;
	}
	.time, .address {
		padding-left: 20rpx;
		/* font-weight: bold; */
		font-size: 24px;
	}
</style>
