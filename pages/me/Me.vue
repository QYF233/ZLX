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
			icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595506331552&di=f900d1bd55ad21ca94215c21ee2d8dfc&imgtype=0&src=http%3A%2F%2Ftupian.qqw21.com%2Farticle%2FUploadPic%2F2020-6%2F2020617225141628.jpg',
			username:'林其龙',
			backgroundImg:'https://5b0988e595225.cdn.sohucs.com/images/20180711/e8a9f506059745e3863ba12d378d2e26.jpeg',
			userId:''
		}
	},
	onShow() {
		try {
		    const value = uni.getStorageSync('user');
		    if (value) {
		        this.userId = value.id
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
