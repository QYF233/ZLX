<template>
	<view class="place_item" @click="toDetail">
		<div class="img_container">
			<image :src="item.images[0]" class="img"></image>
			</div>
		<view class="msg">
			<h1>{{item.title}}</h1>
			<view class="content">
				{{item.tags}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"Item",
		props:{
			item:Object
		},
		methods:{
			toDetail(){ 
				uni.navigateTo({
					url:'/pages/tourist/Deatil?id=' + this.item.id
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
