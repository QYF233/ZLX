<template>
	<view class="box">
		<view class="icon-b" v-for="(item,index) in iconListBig" :key = 'index'>
			<navigator :url='item.url' v-if="index<2" open-type="switchTab" class="item">
				<view class="iconfont">&#xe61d;</view>
				<view class="name">{{item.name}}</view>
			</navigator>
			<navigator :url='item.url' v-else open-type="navigate" class="item">
				<view class="iconfont">&#xe61d;</view>
				<view class="name">{{item.name}}</view>
			</navigator>
		</view>
		<view class="icon-s" v-for="(item,index) in iconListSm" :key = 'index'>
			<navigator :url='item.url' open-type="navigate" class="item">
				<view class="iconfont">&#xe61d;</view>
				<view class="name">{{item.name}}</view>
			</navigator>
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
				  url: '/pages/food/food'				
				},{
				  icon: '&#xe61d;',
				  color: 'red',
				  name: '寻住',
				  url: '/pages/hotel/hotel'
				},{
				  icon: '&#xe61d;',
				  color: 'red',
				  name: '寻游',
				  url: '/pages/tourist/tourist'
				},{
				  icon: '&#xe61d;',
				  color: 'red',
				  name: '寻境',
				  url: '/pages/locations/locations'
				}],
				
				iconListSm: [{
				  icon: '&#xe61d;',
				  color: 'red',
				  name: '寻意',
				  url: '/pages/atmosphere/atmosphere'
				},{
				  icon: '&#xe61d;',
				  color: 'red',
				  name: '寻乐',
				  url: '/pages/play/play'
				},{
				  icon: '&#xe61d;',
				  color: 'red',
				  name: '寻宝',
				  url: '/pages/treasure/treasure'
				},{
				  icon: '&#xe61d;',
				  color: 'red',
				  name: '寻诗',
				  url: '/pages/poem/poem'
				},{
				  icon: '&#xe61d;',
				  color: 'red',
				  name: '寻画',
				  url: '/pages/painting/painting'
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
