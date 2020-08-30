<!-- 寻宝 -->
<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<!-- <rotation-image></rotation-image> -->
		<!-- <view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-titles text-green"></text>
				<text class="text-xl text-bold">分类</text>
			</view>
		</view> -->
		<treasure-image></treasure-image>
	</view>
</template>

<script>
	import RotationImage from './components/Header.vue'
	import TreasureImage from './components/Body.vue'
	export default {
		name: 'treasure',
		components:{
			RotationImage,
			TreasureImage
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style>
</style>
