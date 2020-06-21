<template>
	<div class="header">
		<div class="search">
			<div class="iconfont icon">&#xea94;</div>
			<div class="title">搜城市/酒店/景点/美食</div>
		</div>
		<div class='right'>
			<div class="iconfont add">&#xe601;</div>
		</div>
	</div>
</template>

<script>
export default{
	name: 'HomeHeader',
}
</script>

<style>
	.header{
		position: relative;
		display: inline-flex;
		width: 100%;
	}
	.search{
		border-radius: 25px;
		background-color: #fff;
		width: 75%;
		height: 30px;
		line-height: 30px;
		float: left;
		margin: 10px 0px 10px 20px;
		padding: 2px;
		color: #666;
	}
	.search .icon{
		margin: 0px 10px;
	}
	.right{
		float: right;
		height: 30px;
		width: auto;
		line-height: 30px;
		text-align: center;
		margin:10px 20px;
	}
	.add{
		font-size: 25px;
		color: #fff;
	}
	.search .title,.search .icon{
		display: inline-block;
	}
</style>
