<template>
	<view class="location">
		<div class="left">
			<div class="up">
				<div class="city">杭州</div>
				<span class="iconfont">&#xe658;</span>
			</div>
			<div class="temp">
				<span class="iconfont">&#xe646;</span>
				<span class="low">20</span>~<span class="hight">30</span>℃
			</div>
		</div>
		<div class="right"><span class="iconfont">&#xe61c;</span>看旅图</div>
	</view>
</template>

<script>
export default{
	name: 'HomeLocation'
}
</script>

<style>
	.location{
		left: 0;
		display: flex;
		height: 100px;
		width: 100%;
		flex-direction: column;
	}
	.up{
		display: flex;
	}
	.city{
		font-size: 40px;
		color: #fff;
		margin-left: 30px;
		margin-top: 15px;
		height: 55px;
		line-height: 55px;
	}
	.up .iconfont{
		color: #fff;
		margin-top: 15px;
		font-size: 20px;
		margin-left:5px;
		height: 55px;
		line-height: 55px;
	}
	.temp{
		font-size: 16px;
		margin-left: 30px;
		color: #fff;
	}
	.temp .iconfont{
		margin-right: 5px;
	}
	.right{
		position: absolute;
		right: 0;
		margin: 45px 30px 0 0;
		height: 30px;
		line-height: 30px;
		width: 100px;
		background-color: #1fb1c18d;
		color: #fff;
		font-size: 18px;
		border-radius: 25px;
		padding: 2px 5px;
	}
	.right .iconfont{
		margin: 0 5px 0 10px;
	}
</style>
