<template>
	<view class="location">
		<div class="city">杭州</div>
	</view>
</template>

<script>
export default{
	name: 'HomeLocation'
}
</script>

<style>
	.location{
		position: absolute;
		top: 54px;
		left: 0;
		display: inline-flex;
		height: 100px;
		width: 100%;
	}
	.city{
		font-size: 25px;
	}
</style>
