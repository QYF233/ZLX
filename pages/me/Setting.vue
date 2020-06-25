<template>
	<view>
		<button @click="logout">退出登录</button>
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

<style>
</style>
