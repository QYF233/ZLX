<template>
	<view class="about">
		<view class="logo">
			<image src="../../static/image/logo.png" class="logo-icon"></image>
			<view class="name">
				<h1>浙里寻</h1>
			</view>
			<view class="version">v1.0.0</view>
		</view>
		<view class="group">© 杭州职业技术学院 软件技术</view>
	</view>
</template>

<script>
	export default{
		name:"about"
	}
</script>

<style>
	h1 {
		font-size: 20px;
	}
	.version {
		color: #b5b5b5;
	}
	.about{
		padding-top: 120rpx;
	}
	.logo{
		text-align: center;
		line-height: 30px;
	}
	.logo-icon{
		width: 160rpx;
		height: 160rpx;
		display: block;
		margin: 0 auto;
	}
	.group {
		position: absolute;
		bottom: 20rpx;
		left: 0;
		right: 0;
		text-align: center;
	}
</style>
