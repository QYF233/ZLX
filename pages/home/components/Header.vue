<template>
	<view class="header">
		<navigator url="/pages/zy-search/zy-search" open-type="navigate" class="search">
			<view>
				<text class="iconfont icon">&#xe678;</text>
				<text class="title">搜城市/酒店/景点/美食</text>
			</view>
		</navigator>
		<view class='right'>
			<view class="iconfont add">&#xe601;</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'HomeHeader',
}
</script>

<style>
	.header{
		position: relative;
		display: inline-flex;
		width: 100%;
	}
	.search{
		border-radius: 50rpx;
		background-color: #fff;
		width: 75%;
		height: 60rpx;
		line-height: 30px;
		float: left;
		margin: 20rpx 0rpx 20rpx 40rpx;
		padding: 4rpx;
		color: #9c9c9c;
	}
	.search .icon{
		margin: 0rpx 20rpx;
	}
	.add{
		margin: 30rpx 0rpx 20rpx 40rpx;
		font-size: 50rpx;
		color: #fff;
	}
</style>
