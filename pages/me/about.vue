<template>
	<view class="about">
		<view class="logo">
			<image :src="this.websiteUrl + 'logo.png'" class="logo-icon"></image>
			<view class="version">v1.0.0</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"about"
	}
</script>

<style lang="stylus" scoped>
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
		/* width: 160rpx;
		height: 160rpx; */
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
