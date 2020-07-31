<template>
	<view class="place_item" @click="toDetail">
		<div class="img_container">
			<image src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/c20f0a91f43c6c7fc761249aab729390.jpg_r_800x800x70_24694821.jpg" mode="widthFix" class="img"></image>
			</div>
		<view class="msg">
			<h1>花花岛</h1>
			<view class="content">
				国内最日系漫画小岛，媲美希腊的圣托里尼
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"Item",
		props:{
			location:Object
		},
		methods:{
			toDetail(){
				uni.navigateTo({
					url:'/pages/tourist/Deatil'
				})
			}
		}
	}
</script>

<style>
	.img{
		width: 100%;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
	}
	.place_item {
		margin: 40rpx;
		border-radius: 10px;
		background-color: #FFFFFF;
	}
	.msg{
		margin-top: 30rpx;
	}
	h1{
		border-left: 10rpx solid #ffca1d;
		padding-left: 10rpx;
		font-size: 26px;
	}
	.content{
		font-size: 16px;
		margin: 20px 0 0 20rpx;
		color: #333;
		padding-bottom: 20rpx;
	}
</style>
