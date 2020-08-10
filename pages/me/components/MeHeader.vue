<template>
	<view class="top_icon" :style="{backgroundImage:'url('+backgroundImg+')'}" @click="changeBg">
		<image class="icon" :src="icon" @click.stop="previewIcon"></image>
		<p class="user">{{username}}</p>
	</view>
</template>

<script>
export default {
	name:"MeHeader",
	props:{
		icon:String,
		username:String,
		backgroundImg:String
	},
	methods:{
		previewIcon(ev){
			uni.previewImage({
				urls:[this.icon]
			})
		},
		changeBg(){
			this.$emit('changeBg')
		}
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
		background-size: cover;
	}
	.icon{
		display: block;
		height: 140rpx;
		width: 140rpx;
		border-radius: 50%;
		margin: 0 auto;
	}
</style>
