<!-- 寻吃 -->
<template>
	<view>
		<search-tool></search-tool>
		<food-image></food-image>
		<view class="more">更多</view>
	</view>
</template>

<script>
	import SearchTool from './components/Header.vue'
	import FoodImage from './components/Body.vue'
	export default {
		name:'food',
		components:{
			SearchTool,
			FoodImage
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.more{
	text-align: right;
	margin-right:75rpx;
	margin-bottom:50rpx;
	color:orange;
}
</style>
