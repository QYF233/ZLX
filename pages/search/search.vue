<template>
	<view>
		<zy-search :is-focus="false" :theme="themeClass" :show-want="true" :speechEngine="speechEngine"
		:hot-list="hotList" @getSearchText="getSearchText"></zy-search>
	</view>
</template>

<script>
	import zySearch from '../home/components/Search.vue'
	export default {
		components: {
			zySearch
		},
		data() {
			return {
				themeClass: 'block',
				speechEngine: 'baidu', //语音识别引擎
				hotList: ['五星级酒店','美食','游乐园','民宿']	//初始化推荐列表
			}
		},
		methods: {
			getSearchText(e) {
				uni.showToast({
					title:'回调的搜索信息: ' + e,
					icon:"none"
				})
			}
		},
	}
</script>

<style>
</style>
