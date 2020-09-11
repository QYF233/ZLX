<template>
	<view class="container">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<view class="swiper-item">
					<image :src="item.img" mode=""></image>
				</view>
			</swiper-item>
			
		</swiper>
		<view>
			<view class="detail"> 
			<view v-for="(item,index) in detail" :key="index" class="clearfix row">
				<view class="ways">{{item.ways}}</view>
				<view class="ans">{{item.ans}}</view>
			</view>
			</view>
		<h2>这里是这个博物馆的简介</h2>
			<text>{{introduce}}</text>
		</view>
	</view>
</template>
<script>
	import swiper from '../../components/swiper/swiper.vue'
	export default {
		components: {
			swiper
		},
		data() {
			return {
				currentImg: 0, //当前默认选中
				introduce: '啊吧啊吧 这是简介',
			};
		},
		methods: {
			
		}
	}
</script>
<style  lang="stylus" scoped>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
	.clearfix:after{
	     content:".";       
	     display:block;       
	     height:0;       
	     clear:both;       
	     visibility:hidden;       
	}
	.ways{
		text-align center;
		font-size :25px;
		font-weight :bolder;
		width:40%;
		float:left;
	}
	.ans{
		text-align center;
		width:60;
		float:left;
	}
	.detail{
		margin-top:20rpx;
		margin-bottom:40rpx;
	}
</style>

