<template>
	<view>
		<button @click="logout" size="default" type="warn" style="margin: 500rpx 95rpx;">退出登录</button>
	</view>
</template>

<script>
	export default {
		methods:{
			logout(){
				uni.clearStorage()
				uni.switchTab({
					url:'/pages/me/Me'
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
</style>
