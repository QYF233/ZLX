<template>
	<view class="content">
		<login v-show="userId===''"></login>
		<view  v-show="userId!==''">
			<me-header :icon="icon" :username="username" :backgroundImg="backgroundImg"></me-header> 
			<options></options>
		</view>
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
			icon:'/static/image/logo.png',
			username:'昵称',
			backgroundImg:'/static/image/xihu.jpg',
			userId:''
		}
	},
	onShow() {
		try {
		    const value = uni.getStorageSync('uId');
		    if (value) {
		        this.userId = value
		    }else{
				this.userId = ''
			}
		} catch (e) {
		    // error
		}
	}
}
</script>
<style>
</style>
