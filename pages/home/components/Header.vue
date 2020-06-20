<template>
	<div class="header">
		<div class="search">
			<div class="iconfont icon">&#xea94;</div>
			<div class="title">搜城市/酒店/景点/美食</div>
		</div>
		<div class="iconfont add">&#xe601;</div>
	</div>
</template>

<script>
export default{
	name: 'HomeHeader',
}
</script>

<style>
	.add{
		display: inline-block;
	}
	.search{
		border-radius: 25px;
		background-color: #fff;
		width: 300px;
		height: 30px;
		line-height: 30px;
		font-size: 16px;
		float: left;
		margin: 10px 20px;
		padding: 5px;
	}
	.search .icon{
		margin: 0px 10px;
	}
	.add{
		height: 30px;
		margin-top: 15px;
		float: right;
		font-size: 25px;
		color: #fff;
	}
	.search .title,.search .icon{
		display: inline-block;
	}
</style>
