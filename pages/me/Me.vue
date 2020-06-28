<template>
	<view class="content">
		<view v-show="userId===''" class="not-login">
			您还没有登录^_^
			<navigator url="/pages/me/Login" hover-class="none">
				<button size="mini" type="primary">点击登录</button>
			</navigator>
		</view>
		<view  v-show="userId!==''">
			<me-header :icon="icon" :username="username" :backgroundImg="backgroundImg"></me-header> 
			<options></options>
		</view>
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
	.not-login{
		width: 100%;
		text-align: center;
		font-size: 18px;
		margin-top: 550rpx;
	}
</style>
