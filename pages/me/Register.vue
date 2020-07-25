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
				console.log(e)
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
