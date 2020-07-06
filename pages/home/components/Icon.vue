<template>
		<view class="box cu-list grid margin" :class="['col-' + gridCol,gridBorder?'':'no-border']">
			<view class="icon-b cu-item" v-for="(item,index) in iconListBig" :key = 'index' v-if="index<gridCol*2">
				<navigator :url='item.url' v-if="index<2" open-type="switchTab" class="item">
					<view class="iconfont" :style="{color:item.color}">{{item.icon}}</view>
					<text class="name">{{item.name}}</text>
				</navigator>
				<navigator :url='item.url' v-else open-type="navigate" class="item">
					<view class="iconfont tubiaozhizuomoban_fengjing" :style="{color:item.color}">{{item.icon}}</view>
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
				gridCol: 4,
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
		background-color: #FFF;
		border-radius: 20rpx;	
		.item
			.iconfont
				font-size: 60rpx;
				margin: 20rpx 20rpx;
</style>
