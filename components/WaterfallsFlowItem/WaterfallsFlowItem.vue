<template>
	<view class="wf-item-page"> 
		<image class="image" :src="item.image" mode="widthFix"></image>
		<h1 v-if="item.title">
			{{item.title}}
		</h1>
		<view class="desc">{{item.content}}</view>
		<view class="user" v-if="item.user">
			<view class="user_icon">
				<image :src="item.user.avatar" class="icon"></image>
			</view>
			{{item.user.name}}
		</view>
		<view class="type">
			{{item.type}}
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type:Object,
				require:true
			}
		}
	}
</script>

<style scoped>
	.wf-item-page{
		background-color: #FFFFFF;
		border-radius: 10rpx;/* 修改背景，新增圆角 */
	}
	.image{
		width: 100%;
		border-radius: 10rpx;
	}
	.desc{
		padding :16rpx;
		font-size: 14px
	}
	.user{
		display: flex;
		margin: 0 10rpx;
	}
	.icon {
		width: 45rpx;
		height: 45rpx;
		border-radius: 50%;
	}
	.user_icon {
		margin-right: 5rpx;
	}	
	h1{
		font-size: 18px;
		margin: 0 20rpx;
	}
	.type {
		color: #B5B5B5;
		float: right;
		margin:0 10rpx 10rpx 0;
	}
	.wf-item-page:after{
		display: block;
		clear:both;
		height:0;
		content: "";
		visibility: hidden;
		overflow:hidden;
	}
</style>
