<template>
	<view class="images">
		<view class="iconfont back_btn" @click.stop="back">
			&#xe937;
		</view>
		<swiper class="swiper square-dot" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in images" :key="index">
				<view class="swiper-item" :style="'background-image:url('+ item +')'" @click="previewImage(index)">
					
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			images:Array
		},
		methods:{
			previewImage(index){
				uni.previewImage({
					urls:this.images,
					current:index,
					indicator:'number'
				})
			},
			back(){
				uni.navigateBack({
					delta:1 
				})
			}
		}
	}
</script>

<style>
	.back_btn {
		background-color: #000;
		color: #FFFFFF;
		opacity: .5;
		height: 50rpx;
		width: 50rpx;
		border-radius: 50%;
		position: absolute;
		top: 20rpx;
		left: 30rpx;
		text-align: center;
		line-height: 50rpx;
		z-index: 1000;
	}
	.swiper-item {
		height: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		border-radius: 10rpx;
	}
	.uni-swiper-wrapper{
		border-radius: 10rpx;
	}
	.swiper{
		margin:0 20rpx 20rpx 20rpx;
		border-radius: 10rpx;
	}
</style>
