<template>
	<view class="register">
		<view class="title">
			<h1>用户注册</h1>
		</view>
		<form class="form" @submit="goRegister">
			<input type="text" name="nickname" class="input" placeholder="输入昵称"/>
			<input type="text" name="user" class="input" placeholder="输入邮箱或手机号"/>
			<view class="verification_code">
				<input type="digit" name="verification_code" class="code input" placeholder="输入验证码"/>
				<view class="send_code_btn_container">
					<button type="default" size="mini" class="send_code_btn" @click="sendCode" :disabled="disable">{{message}}</button>
				</view>
			</view>
			<input type="text" name="password" class="input" password="true" placeholder="输入密码"/>
			<input type="text" name="repassword" class="input" password="true" placeholder="再次输入密码"/>
			<button type="primary" form-type="submit">注册</button>
		</form>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				disable:false,
				message:'发送验证码'
			}
		},
		methods:{
			goRegister(e){
				let data = e.detail.value
				if(data.nickname.length<1) {
					uni.showToast({
						title:'昵称不能为空',
						icon:'none',
						position:'top'
					})
				} else if( !(/^1[3456789]\d{9}$/.test(data.user))
				&& !(/^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/.test(data.user))){
					uni.showToast({
						title:'用户名不正确',
						icon:'none',
						position:'top'
					})
				}else if(data.verification_code.length<6) {
					uni.showToast({
						title:'验证码不正确',
						icon:'none',
						position:'top'
					})
				} else if(!(/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,16}$/.test(data.password))){
					uni.showToast({
						title:'密码由6-21字母和数字组成，不能是纯数字或纯英文',
						icon:'none',
						position:'top'
					})
				} else if(data.password != data.repassword) {
					uni.showToast({
						title:'两次密码不一致',
						icon:'none',
						position:'top'
					})
				} else {
					uni.request({
						url:this.websiteUrl + 'user/isvalid?username=' + data.user,
						success: (res) => {
							if(res.data) {
								uni.request({
									url:this.websiteUrl + 'user/register',
									header:{
										'content-type':this.contentType
									},
									method:'POST',
									data:{
										name:data.nickname,
										username:data.user,
										password:data.password
									},
									success: (res) => {
										uni.showToast({
											title:'注册成功',
											icon:'none',
											position:'top'
										})
										uni.navigateBack({
											delta:1
										})
									}
								})
							} else {
								uni.showToast({
									title:'电话号码或邮箱已存在',
									icon:'none',
									position:'top'
								})
							}
						}
					})
				}
			},
			sendCode(){
				this.disable = true
				this.countdown(60)
				uni.showToast({
					title:'验证码已发出，请注意查收',
					icon:'none',
					position:'top'
				})
			},
			countdown(second){
				if(second > 0){
					setTimeout(() => {
						this.message = second + 's'
						this.countdown(--second)
					},1000)
				} else {
					this.message = '发送验证码'
					this.disable = false
				}
				
			}
		}
	}
</script>

<style>
	.title{
		margin-bottom: 150rpx;
		margin-top: 150rpx;
	}
	h1{
		font-size: 55rpx;
	}
	.register{
		padding: 70rpx;
	}
	.input{
		border-bottom: 1px solid #d5d5d5;
		caret-color:#DC143C;
		padding:0 20rpx;
		margin-top: 55rpx;
	}
	.verification_code{
		display: flex;
	}
	.send_code_btn {
		margin-top: 40rpx;
		margin-left: 20rpx;
	}
	button{
		margin-top: 55rpx;
	}
</style>
