<template>
	<view>
		<zy-search :is-focus="false" :theme="themeClass" :show-want="true" :showHis="true"  :speechEngine="speechEngine" :backPage="backPage" :home="true"
		:hot-list="hotList" @getSearchText="getSearchText"></zy-search>
	</view>
</template>

<script>
	import zySearch from './components/Search.vue'
	export default {
		components: {
			zySearch
		},
		data() {
			return {
				themeClass: 'block',
				speechEngine: 'baidu', //语音识别引擎
				hotList: ['绍兴','美食','游乐园','民宿'],	//初始化推荐列表
				backPage:"/pages/home/home",
			}
		},
		methods: {
			getSearchText(e) {
				/* uni.showToast({
					title:'回调的搜索信息: ' + e,
					icon:"none"
				}) */
			}
		},
	}
</script>

<style  lang="stylus" scoped>
</style>
