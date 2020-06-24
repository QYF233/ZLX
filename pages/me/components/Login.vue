<template>
	<view class="login">
		<view class="title">
			<h1>用户登录</h1>
		</view>
		<form @submit="formSubmit">
			<input type="text" name="user" placeholder="输入邮箱或手机号">
			<input type="text" name="password" password="true" placeholder="输入密码">
			<navigator url="/pages/me/Register" hover-class="none">
				<text>忘记密码？</text>
			</navigator>
			<button type="primary" form-type="submit">登录</button>
		</form>
		<navigator class="toregister" url="/pages/me/Register" hover-class="none">
			用户注册
		</navigator>
	</view>
</template>

<script>
	export default {
		name:'Login',
		methods:{
			formSubmit(e){
				console.log(e)
			}
		}
	}
</script>

<style>
	.login{
		padding: 70rpx;
	}
	input{
		border-bottom: 1px solid #DC143C;
		padding: 20rpx;
		caret-color:#DC143C;
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
		font-size: 18px;
		left: 70rpx;
		right: 70rpx;
		text-align: center;
	}
</style>
