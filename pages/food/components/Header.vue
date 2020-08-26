<template>
	<view>
		<view class="header">
			{{this.currentCity.name}}
		</view>
		<!-- 新增 -->
		<!-- 点击进入选择城市界面（新的界面）选择完后回到美食主页 -->
		<view class="other">
			选择其他城市
		</view>
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
		font-size: 50upx;
	}
</style>
