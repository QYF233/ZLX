<template>
	<view>
		<view class="header">
			<view class="title">
				{{this.currentCity.name}}
			</view>
			<view class="other">
				<navigator url="otherCity" open-type="navigate">
					<view class="otherCity">切换城市</view>
				</navigator>
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
		display: inline-block;
		margin: 20rpx 20rpx;
		width: 100%;
		height: 60rpx;	
	}
	.title {
		float: left;
		font-size: 50upx;
		font-weight: bold;
	}
	.other {
		margin: 10rpx;
		float: right;
		margin-right: 40rpx;
	}
	.otherCity{
		font-size: 1rem;
	}
</style>
