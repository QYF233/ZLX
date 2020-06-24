<template>
	<view class="content">
		<template v-if="userId==''">
			<login></login>
		</template>
		<template v-else>
			<me-header :icon="icon" :username="username" :backgroundImg="backgroundImg"></me-header>
			<options></options>
		</template>
	</view>
</template>

<script>
import MeHeader from './components/MeHeader'
import Options from './components/Options'
import Login from './components/Login'
export default {
	name:'Me',
	components:{
		MeHeader,
		Options,
		Login
	},
	data() {
		return {
			icon:'/static/logo.png',
			username:'昵称',
			backgroundImg:'/static/xihu.jpg',
			userId:''
		}
	}
}
</script>
<style>
</style>
