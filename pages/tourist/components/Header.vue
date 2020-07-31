<template>
	<view class="header">
		<view class="market item">
			<image class="img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" mode=""></image>
			<view>商场</view>
		</view>
		<view class="museum item">
			<image class="img" src="http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png" mode=""></image>
			<view>博物馆</view>
		</view>
		<view class="park item">
			<image class="img" src="http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png" mode=""></image>
			<view>游乐园</view>
		</view>
		<view class="spot item">
			<image class="img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" mode=""></image>
			<view>景点</view>
		</view>
		<view class="zoo item">
			<image class="img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" mode=""></image>
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
