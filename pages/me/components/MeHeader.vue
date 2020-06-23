<template>
	<view class="top_icon">
		<image class="icon" :src="icon"></image>
		<p class="user">{{username}}</p>
	</view>
</template>

<script>
export default {
	name:"MeHeader",
	props:{
		icon:String,
		username:String
	}
}
</script>

<style>
	.user{
		padding-top: 15rpx;
		padding-bottom: 25rpx;
		text-align: center;
		font-size: medium;
		color: #ffffff;
	}
	.top_icon{
		padding-top: 200rpx;
		background-color: #2B9939;
	}
	.icon{
		display: block;
		height: 140rpx;
		width: 140rpx;
		border-radius: 50%;
		margin: 0 auto;
	}
</style>
