<template>
	<view class="places">
		<tourist-search></tourist-search>
		<tourist-header></tourist-header>
		<tourist-item></tourist-item>
		<tourist-item></tourist-item>
		<tourist-item></tourist-item>
		<tourist-item></tourist-item>
	</view>
</template>

<script>
	import TouristSearch from './components/Search'
	import TouristHeader from './components/Header.vue'
	import TouristItem from './components/item.vue'
	export default{
		components:{
			TouristSearch,
			TouristHeader,
			TouristItem
		}
	}
</script>

<style>
</style>
