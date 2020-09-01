<template>
	<view>
		<view class="header">
			<view class="title"  align="left">
				{{this.currentCity.name}}
			</view>
		</view>
		<!-- 新增 -->
		<!-- 点击进入选择城市界面（新的界面）选择完后回到美食主页 -->
	</view>
</template>

<script>
	export default {
		name: 'FoodHeader',
		props: ['currentCity'],
		data() {
			return {

			}
		},

		methods: {

		},
	}
</script>

<style lang="scss">
	.header {
		
		margin: 20rpx 20rpx;
		width: 100%;
		height: 60rpx;	
	}
	.title {
		display: inline-block;
		font-size: 50upx;
		font-weight: bold;
		width: 70%;
	}
	.other {
		display: inline-block;
		margin: 10rpx;
		margin-right: 40rpx;
	}
	.otherCity{
		font-size: 1rem;
	}
</style>
