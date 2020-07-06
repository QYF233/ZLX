<template>
	<view>
		<view class="find">
			<view class="title">旅行发现</view>
			<view class="contianer">
				<view class="item">item</view>
				<view class="item">item</view>
				<view class="item">item</view>
				<view class="item">item</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus" scoped>
	.find
		width 100%
		height 2000rpx
		.title
			margin-left:20rpx
			font-size: 40rpx
			font-weight bold
			color: #646464;
		.contianer
			flex-direction row
			padding 20rpx
			.item
				flex-direction row
				width 30%
				height 100rpx
				background-color #007AFF
				margin-right 20rpx
</style>
