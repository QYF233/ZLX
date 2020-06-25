<template>
	<view class="box">
		<view class="icon-b" v-for="(item,index) in iconListBig" :key = 'index'>
			<view class="item">
				<view class="iconfont">&#xe61d;</view>
				<view class="name">{{item.name}}</view>
			</view>
		</view>
		<view class="icon-s" v-for="(item,index) in iconListSm" :key = 'index'>
			<view class="item">
				<view class="iconfont">&#xe61d;</view>
				<view class="name">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'HomeIcon',
		data() {
			return {
				iconListBig: [{
				  icon: '&#xe61d;',
				  color: 'red',
				  name: '寻吃',
				  url: ''
				},{
				  icon: '&#xe61d;',
				  color: 'red',
				  name: '寻住',
				  url: ''
				},{
				  icon: '&#xe61d;',
				  color: 'red',
				  name: '寻游',
				  url: ''
				},{
				  icon: '&#xe61d;',
				  color: 'red',
				  name: '寻境',
				  url: ''
				}],
				
				iconListSm: [{
				  icon: '&#xe61d;',
				  color: 'red',
				  name: '寻意',
				  url: ''
				},{
				  icon: '&#xe61d;',
				  color: 'red',
				  name: '寻乐',
				  url: ''
				},{
				  icon: '&#xe61d;',
				  color: 'red',
				  name: '寻宝',
				  url: ''
				},{
				  icon: '&#xe61d;',
				  color: 'red',
				  name: '寻诗',
				  url: ''
				},{
				  icon: '&#xe61d;',
				  color: 'red',
				  name: '寻画',
				  url: ''
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus" scoped>
	.box
		margin: 40rpx;
		background-color: #FFF;
		border-radius: 20rpx;	
	.icon-b
		display: inline-flex;
		flex-direction: row;
		color: #5f5f5f;
		.item
			margin: 10rpx 30rpx;
			.iconfont
				font-size: 60rpx;
				margin: 40rpx 20rpx;
			.name
				margin: 0rpx 20rpx;
	.icon-s
		display: inline-flex;
		flex-direction: row;
		color: #5f5f5f;
		.item
			margin: 10rpx 10rpx;
			.iconfont
				font-size: 50rpx;
				margin: 30rpx 30rpx;
			.name
				margin: 30rpx 20rpx;
</style>
