<!-- 寻宝 -->
<template>
	<view>
		<rotation-image></rotation-image>
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
