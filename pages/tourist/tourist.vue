<template>
	<view class="places">
		<t-header></t-header>
		<item></item>
		<item></item>
		<item></item>
		<item></item>
	</view>
</template>

<script>
	import Item from './components/item.vue'
	import THeader from './components/Header.vue'
	export default{
		components:{
			Item,
			THeader
		}
	}
</script>

<style>
</style>
