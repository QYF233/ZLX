<template>
	<view class="box">
		<view class="icon-b" v-for="(item,index) in iconListBig" :key = 'index'>
			<navigator :url='item.url' v-if="index<2" open-type="switchTab" class="item">
				<view class="iconfont" :style="{color:item.color}">{{item.icon}}</view>
				<view class="name">{{item.name}}</view>
			</navigator>
			<navigator :url='item.url' v-else open-type="navigate" class="item">
				<view class="iconfont tubiaozhizuomoban_fengjing" :style="{color:item.color}">{{item.icon}}</view>
				<view class="name">{{item.name}}</view>
			</navigator>
		</view>
		<!-- <view class="icon-s" v-for="(item,index) in iconListSm" :key = 'index'>
			<navigator :url='item.url' open-type="navigate" class="item">
				<view class="iconfont" :style="{color:item.color}">&#xe61d;</view>
				<view class="name">{{item.name}}</view>
			</navigator>
		</view> -->
	</view>
</template>

<script>
	export default {
		name: 'HomeIcon',
		data() {
			return {
				iconListBig: [{
				  icon: '\ue60b',
				  color: '#e2c326',
				  name: '寻吃',
				  url: '/pages/food/food'				
				},{
				  icon: '\ue609',
				  color: '#5555ff',
				  name: '寻住',
				  url: '/pages/hotel/hotel'
				},{
				  icon: '\ue61d',
				  color: '#00aaff',
				  name: '寻游',
				  url: '/pages/tourist/tourist'
				},{
				  icon: '\ue608',
				  color: '#55ff7f',
				  name: '寻境',
				  url: '/pages/locations/locations'
				},{
				  icon: '\ue62e',
				  color: '#7c7cb9',
				  name: '寻意',
				  url: '/pages/atmosphere/atmosphere'
				},{
				  icon: '\ue631',
				  color: '#ff5500',
				  name: '寻乐',
				  url: '/pages/play/play'
				},{
				  icon: '\ue60d',
				  color: '#ffaa00',
				  name: '寻宝',
				  url: '/pages/treasure/treasure'
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
	/* .icon-s
		display: inline-flex;
		flex-direction: row;
		color: #5f5f5f;
		.item
			margin: 10rpx 10rpx;
			.iconfont
				font-size: 50rpx;
				margin: 30rpx 30rpx;
			.name
				margin: 30rpx 20rpx; */
</style>
