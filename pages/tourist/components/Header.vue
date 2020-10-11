<template>
	<view class="header">
		<view class="market item">
			<view class="t-icon iconfont iconshangchang" style="width: 64rpx; height: 64rpx;"></view>
			<!-- <image class="img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" mode=""></image> -->
			<view>商场</view>
		</view>
		<view class="museum item">
			<!-- <image class="img" src="http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png" mode=""></image> -->
			<view class="t-icon iconfont iconmuseum-on" style="width: 64rpx; height: 64rpx;"></view>
			<view>博物馆</view>
		</view>
		<view class="park item">
			<view class="t-icon iconfont iconyouleyuan1" style="width: 64rpx; height: 64rpx;"></view>
			<!-- <image class="img" src="http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png" mode=""></image> -->
			<view>游乐园</view>
		</view>
		<view class="spot item">
			<view class="t-icon iconfont iconjingdian2" style="width: 64rpx; height: 64rpx;"></view>
			<!-- <image class="img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" mode=""></image> -->
			<view>景点</view>
		</view>
		<view class="zoo item">
			<view class="t-icon iconfont iconzu" style="width: 64rpx; height: 64rpx;"></view>
			<!-- <image class="img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" mode=""></image> -->
			<view>动物园</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"Header"
		
	}
</script>

<style>
	.header {
		display: flex;
		margin: 20rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
	}
	.item {
		text-align: center;
		width: 20%;
		padding: 10rpx;
		margin: 10rpx 0;
	}
	.img {
		width: 80rpx;
		height: 80rpx;
	}
	
</style>
