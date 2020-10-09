<template>
	<view>
		<view class="header">
			<view class="title"  align="left">
				{{this.currentCity.name}}
			</view>
			<view class="new" v-if="role===1">
				<button type="primary" size="mini" @click="toadd">添加</button>
			</view>
		</view>
		<!-- 新增 -->
		<!-- 点击进入选择城市界面（新的界面）选择完后回到美食主页 -->
	</view>
</template>

<script>
	export default {
		name: 'FoodHeader',
		props: ['currentCity','role'],
		data() {
			return {

			}
		},

		methods: {
			toadd(){
				uni.navigateTo({
					url:"/pages/food/add"
				})
			}
		},
	}
</script>

<style  lang="stylus" scoped>
	.header {
		display flex;
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
