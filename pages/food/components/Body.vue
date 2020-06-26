<template>
		<view class="box">
			<view class="foodImages" v-for="(item,index) in foodimg" :key = 'index'>
				<view class="item">
					<view class="iconfont">&#xe61d;</view>
					<view class="name">{{item.name}}</view>
				</view>
			</view>
		</view>
</template>
<script>
	export default {
		name: 'FoodImages',
		data() {
			return {
				foodimg: [{
				  name: '西湖醋鱼',
				  url: ''				
				},{
				  name: '绍兴臭豆腐',
				  url: ''
				},{
				  name: '东坡肉',
				  url: ''
				},{
				  name: '油焖笋',
				  url: ''
				},{
				  name: '杭州卤鸭',
				  url: ''
				},{
				  name: '无锡排骨',
				  url: ''
				},{
				  name: '红烧狮子头',
				  url: ''
				},{
				  name: '醉虾',
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
		text-align :center;
	.foodImages
		display: inline-flex;
		flex-direction: row;
		color: #5f5f5f;
		.item
			margin: 10rpx 30rpx;
			.iconfont
				font-size: 180rpx;
				margin: 40rpx 20rpx;
			.name
				margin: 0rpx 20rpx;
	
</style>

