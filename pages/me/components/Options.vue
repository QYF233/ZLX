<template>
	<view class="options">
		<ul class="option-ul">
			<li class="option-li" @click="to('comment')">
				<view class="iconfont">&#xe614;</view> 
				<view class="li-button">评论</view>
			</li>
			<li class="option-li" @click="to('reply')">
				<view class="iconfont">&#xe62e;</view> 
				<view class="li-button">回复</view>
			</li>
			<li class="option-li" @click="to('article')">
				<view class="iconfont">&#xe606;</view> 
				<view class="li-button">发表</view>
			</li>
			<li class="option-li" @click="to('mine')">
				<view class="iconfont">&#xe62b;</view> 
				<view class="li-button">收藏</view>
			</li>
		</ul>
		<ul>
			<li class="item">
				<view class="item-view">
					<view class="item-view-left">图标 </view>
					<view class="item-view-right">个人信息</view>
				</view>
			</li>
			<navigator url="/pages/me/Setting">
				<li class="item">
					<view class="item-view">
						<view class="item-view-left">图标 </view>
						<view class="item-view-right">设置</view>
					</view>
				</li>
			</navigator>
			<li class="item">
				<view class="item-view">
					<view class="item-view-left">图标 </view>
					<view class="item-view-right">反馈</view>
				</view>
			</li>
			<li class="item">
				<view class="item-view">
					<view class="item-view-left">图标 </view>
					<view class="item-view-right">关于</view>
				</view>
			</li>
		</ul>
	</view>
</template>

<script>
export default {
	name:"Option",
	methods:{
		to:function(to){
			console.log(to)
			uni.navigateTo({
				url:'/pages/me/Setting'
			})
		}
	}
}
</script>

<style>
	.option-li{
		width: 25%;
	}
	ul{
		padding: 0;
	}
	.option-ul{
		display: flex;
		margin-top: 40rpx;
		padding-bottom: 40rpx;
		border-bottom: 15rpx solid #E5E5E5;
	}
	.iconfont{
		font-size: 40rpx;
		text-align: center;
		margin-bottom: 10rpx;
		color: #007AFF;
	}
	.li-button{
		text-align: center;
	}
	.item:first-child{
		margin-top: 20rpx;
	}
	.item-view{
		display: flex;
		margin: 0 40rpx;
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 1px solid #E5E5E5;
	}
</style>
 