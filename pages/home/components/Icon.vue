<template>
		<view class="box cu-list grid margin col-4 no-border">
			<view class="icon-b cu-item" v-for="(item,index) in iconListBig" :key = 'index'>
				<navigator :url='item.url' open-type="navigate" class="item">
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
				iconListBig: [{
				  icon: '\ue60b',
				  color: '#fbbd08',
				  name: '寻吃',
				  url: '/pages/food/food'				
				},{
				  icon: '\ue608',
				  color: '#0081ff',
				  name: '寻游',
				  url: '/pages/locations/locations'
				},{
				  icon: '\ueb55',
				  color: '#39b54a',
				  name: '寻景',
				  url: '/pages/tourist/tourist'
				},{
				  icon: '\ue600',
				  color: '#6739b6',
				  name: '寻意',
				  url: '/pages/atmosphere/atmosphere'
				},{
				  icon: '\ue65d',
				  color: '#9c26b0',
				  name: '寻乐',
				  url: '/pages/play/play'
				},{
				  icon: '\ueb57',
				  color: '#f37b1d',
				  name: '寻宝',
				  url: '/pages/treasure/treasure'
				},{
				  icon: '\ue802',
				  color: '#8799a3',
				  name: '寻(山水)画',
				  url: '/pages/painting/painting'
				},{
				  icon: '\ue67c',
				  color: '#1cbbb4',
				  name: '寻境(vr)',
				  url: '/pages/vr/index'
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
