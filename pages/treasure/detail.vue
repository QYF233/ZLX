<template>
	<view class="detail">
		<view class="item ">
			<view class="title text-bold">
				浙江省科技馆
			</view>
			<image class="pic" src="../../static/tsImage/1.jpg" mode=""></image>
			<view class="place text-gray text-ABC">
				杭州市下城区西湖文化广场A区
			</view>
		</view>
		<view class="item ">
			<view class="title text-bold">
				浙江省博物馆
			</view>
			<image class="pic" src="../../static/tsImage/2.jpg" mode=""></image>
			<view class="place text-gray text-ABC">
				浙江省杭州市西湖区孤山路25号
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'detail',
		components: {

		},
		data() {
			return {

			}
		}
	}
</script>

<style>
	
	.item {
		/* margin: 20rpx 40rpx; */
		padding: 20rpx 20rpx;
		position: relative;
	}

	.item:after {
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: 0;
		left: 0px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #919191;
	}

	.title {
		font-size: 18px;
		font-weight: 900;
		color: #333333;
		line-height: 80rpx;
		/* padding: 0 16px; */
	}
	.pic {
		width: 100%;
		height: 180px;
		border-radius: 8px;
	}
	.place {
		margin: 5px 0;
	}
</style>
