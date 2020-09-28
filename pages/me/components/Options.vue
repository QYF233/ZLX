<template>
	<view class="options">
		<ul class="option-ul">
			<li class="option-li">
				<view class="iconfont">&#xe60e;</view>
				<view class="li-button">评论</view>
			</li>
			<li class="option-li">
				<view class="iconfont">&#xe620;</view>
				<view class="li-button">回复</view>
			</li>
			<li class="option-li">
				<view class="iconfont">&#xe77a;</view>
				<view class="li-button">发表</view>
			</li>
			<li class="option-li">
				<navigator url="/pages/me/Collection" hover-class="none">
					<view class="iconfont">&#xe616;</view>
					<view class="li-button">收藏</view>
				</navigator>
			</li>
		</ul>
		<ul>
			<li class="item">
				<view class="item-view">
					<view class="item-view-left">
						<view class="iconfont">&#xe67a;</view>
					</view>
					<view class="item-view-right">个人信息</view>
				</view>
			</li>
			<navigator url="/pages/me/Setting">
				<li class="item">
					<view class="item-view">
						<view class="item-view-left">
							<view class="iconfont">&#xe610;</view>
						</view>
						<view class="item-view-right">设置</view>
					</view>
				</li>
			</navigator>
			<navigator url="/pages/me/tellUs">
				<li class="item">
					<view class="item-view">
						<view class="item-view-left">
							<view class="iconfont">&#xe647;</view>
						</view>
						<view class="item-view-right">反馈</view>
					</view>
				</li>
			</navigator>
			<navigator url="/pages/me/about">
				<li class="item">
					<view class="item-view">
						<view class="item-view-left">
							<view class="iconfont">&#xe629;</view>
						</view>
						<view class="item-view-right">关于</view>
					</view>
				</li>
			</navigator>
		</ul>
	</view>
</template>

<script>
	export default {
		name: "Option",
		methods: {

		}
	}
</script>

<style>
	.option-li {
		width: 25%;
	}

	ul {
		padding: 0;
	}

	.option-ul {
		display: flex;
		margin-top: 40rpx;
		padding-bottom: 40rpx;
		border-bottom: 15rpx solid #E5E5E5;
	}

	.iconfont {
		font-size: 40rpx;
	}

	.option-ul .iconfont {
		text-align: center;
		margin-bottom: 10rpx;
		color: #007AFF;
	}

	.item .iconfont {
		margin-right: 4rpx;
	}

	.li-button {
		text-align: center;
	}

	.item:first-child {
		margin-top: 20rpx;
	}

	.item-view {
		display: flex;
		margin: 0 40rpx;
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 1px solid #E5E5E5;
	}
</style>
