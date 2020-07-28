<template>
		<view class="box">
			<view class="foodImages" v-for="(item,index) in foodimg" :key = 'index'>
				<view class="item">
					<!-- <view class="iconfont">&#xe61d;</view> -->
					<image style="width: 150px; height: 120px;" :src="item.url"></image>
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
				  url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595949521523&di=ea021561ea482efcac311ae6b4a47573&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20171028%2F2d26363a64164659b82d57018aea5f4a.jpeg'				
				},{
				  name: '绍兴臭豆腐',
				  url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595949977087&di=991ef35fee04be3581d69161908df55c&imgtype=0&src=http%3A%2F%2Fccm.ddcdn.com%2Ftourism%2FYK%2FJS%2F1291605856EgrIFcnA.jpg'
				},{
				  name: '东坡肉',
				  url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1764031353,1420116818&fm=26&gp=0.jpg'
				},{
				  name: '油焖笋',
				  url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3408688666,2702687185&fm=26&gp=0.jpg'
				},{
				  name: '杭州卤鸭',
				  url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595949917466&di=0983d8f528420478180d7153c75334de&imgtype=0&src=http%3A%2F%2F3g.hzxdfpr.com%2Fuploads%2Fallimg%2F160904%2F1-160Z4141435602.jpg'
				},{
				  name: '无锡排骨',
				  url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2932095712,3202239189&fm=26&gp=0.jpg'
				},{
				  name: '红烧狮子头',
				  url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3156525440,798911131&fm=26&gp=0.jpg'
				},{
				  name: '醉虾',
				  url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1282338356,4122112390&fm=26&gp=0.jpg'
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus" scoped>
	.box
		margin: 40rpx 0;
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
				color: #333333;
				font-size: 17px;
</style>

