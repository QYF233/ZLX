<template>
	<view class="wf-item-page">
			<view class="pic">
				<image class="image" mode="widthFix" :src="item.image[0]" style="width: 100%; display: block;" ></image>
			</view>
			<view class="content">{{item.content}}</view>
			<view class="user">
			<image style="width: 40upx; height: 40upx; border-radius: 50%; margin-right: 10upx;" 
				:src="item.user.avatar"></image>
			<text class="name">{{item.user.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type:Object,
				require:true
			}
		}
	}
</script>

<style scoped>
	.wf-item-page{
		background-color: #FFFFFF;
	}
	.user {
		display: flex;
		align-items: center;
		padding: 10rpx;
	}
	.content {
		font-size: 28rpx;
		padding: 20rpx 10rpx 0 10rpx;
		color: #333;
	}
</style>
