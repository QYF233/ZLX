<template>
	<view class="content">
		<me-header :icon="icon" :username="username"></me-header>
		<options></options>
	</view>
</template>

<script>
import MeHeader from './components/MeHeader'
import Options from './components/Options'
export default {
	name:'Me',
	components:{
		MeHeader,
		Options
	},
	data() {
		return {
			icon:'/static/xihu.jpg',
			username:'用户名'
		}
	}
}
</script>

<style>
</style>
