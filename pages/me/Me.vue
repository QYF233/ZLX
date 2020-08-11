<template>
	<view class="content">
		<view v-show="userId===''" class="not-login">
			您还没有登录^_^
			<navigator url="/pages/me/Login" hover-class="none">
				<button size="mini" type="primary">点击登录</button>
			</navigator>
		</view>
		<view  v-show="userId!==''">
			<me-header :icon="icon" :username="username" :backgroundImg="backgroundImg" :id="userId" @changeBg="changeBg"></me-header> 
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
			icon:'',
			username:'',
			backgroundImg:'',
			userId:''
		}
	},
	methods:{
		changeBg(){
			
			uni.chooseImage({
				count:1,
				sizeType:['compressed'],
				success:(res) => {
					uni.uploadFile({
						url:this.websiteUrl + 'user/changebg',
						filePath:res.tempFilePaths[0],
						formData:{
							id:this.userId
						},
						name:'bg',
						success: (res) => {
							if(!res.data){
								uni.showToast({
									icon:'none',
									title:'图片上传失败，请重试'
								})
							} else {
								let user = uni.getStorageSync("user")
								user.backgroundImage = res.data
								this.backgroundImg = res.data
								uni.setStorage({
									key:'user',
									data:user
								})
							}
							
						},
						fail: () => {
							if(res.data){
								uni.showToast({
									icon:'none',
									title:'图片太大'
								})
							}
						}
					})
				}
			})
		}
	},
	onShow() {
		const value = uni.getStorageSync('user');
		if (value) {
			this.userId = value.id,
			this.icon = value.icon,
			this.username = value.name
			this.backgroundImg = value.backgroundImage
		}else{
			this.userId = ''
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
