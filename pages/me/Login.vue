<template>
	<view class="login">
		<view class="title">
			<h1>用户登录</h1>
		</view>
		<form @submit="formSubmit">
			<input type="text" name="user" placeholder="输入邮箱或手机号">
			<input type="text" name="password" password="true" placeholder="输入密码">
			<navigator url="/pages/me/Register" hover-class="none" class="forget">
				<text>忘记密码？</text>
			</navigator>
			<button type="primary" form-type="submit" :loading="load">登录</button>
		</form>
		<navigator class="toregister" url="/pages/me/Register" hover-class="none">
			用户注册
		</navigator>
	</view>
</template>

<script>
	export default {
		name:'Login',
		data(){
			return {
				load:false
			}
		},
		methods:{
			formSubmit(e){
				let data = e.detail.value
				if( !(/^1[3456789]\d{9}$/.test(data.user))
				&& !(/^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/.test(data.user))){
					uni.showToast({
						title:'用户名不正确',
						icon:'none',
						position:'top'
					})
				}else if(!(/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,16}$/.test(data.password))){
					uni.showToast({
						title:'密码由6-21字母和数字组成，不能是纯数字或纯英文',
						icon:'none',
						position:'top'
					})
				}else{
					this.load = true
					setTimeout(()=>{
						uni.setStorage({
							key:'uId',
							data:'123'
						})
						uni.switchTab({
							url:'/pages/me/Me',
							success() {
								this.load = false
							}
						})
					},500)	
				}
				
			}
		}
	}
</script>

<style>
	.login{
		padding: 70rpx;
	}
	input{
		border-bottom: 1px solid #d5d5d5;
		caret-color:#DC143C;
		padding:0 20rpx;
		margin-top: 55rpx;
	}
	.title{
		margin-bottom: 150rpx;
		margin-top: 150rpx;
	}
	h1{
		font-size: 55rpx;
	}
	button{
		margin-top: 55rpx;
	}
	.toregister{
		position: absolute;
		bottom: 40rpx;
		font-size: 16px;
		left: 70rpx;
		right: 70rpx;
		text-align: center;
		color: #007AFF;
	}
	.forget{
		margin-top: 20rpx;
	}
</style>
