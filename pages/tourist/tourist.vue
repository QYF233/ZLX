<template>
	<view class="places">
		<tourist-search></tourist-search>
		<tourist-header></tourist-header>
		<tourist-item v-for="i in items" :key="i.id" :item="i"></tourist-item>
	</view>
</template>

<script>
	import TouristSearch from './components/Search'
	import TouristHeader from './components/Header.vue'
	import TouristItem from './components/item.vue'
	export default{
		data() {
			return{
				items:[]
			}
		},
		components:{
			TouristSearch,
			TouristHeader,
			TouristItem
		},
		onLoad() {
			let cityid = uni.getStorageSync('city').id
			uni.request({
				url:this.websiteUrl + 'spot/list?cityid=' + cityid,
				success: (res) => {
					this.items = this.items.concat(res.data)
				}
			})
		}
	}
</script>

<style>
</style>
