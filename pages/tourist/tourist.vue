<template>
	<view>
		<tourist-search></tourist-search>
		<tourist-recommend></tourist-recommend>
		<waterfall-flow :list="list" @click="choose"></waterfall-flow>
	</view>
</template>

<script>
import TouristSearch from './components/Search'
import TouristRecommend from './components/Recommend'
// 瀑布流组件
import WaterfallFlow from '@/components/nairenk-waterfall-flow/nairenk-waterfall-flow.vue';

// 模拟 JSON 数据
const data = require('../../common/json/data.json');

export default{
	name: 'Tourist',
	components: {
		TouristSearch,
		TouristRecommend,
		WaterfallFlow
	},
	data() {
		return {
			page: 1,
			start: 0,
			end: 0,
			list: [], // 列表
		}
	},
	onLoad() {
		this.getList();
	},
	onReachBottom() {
		this.page++;
		this.getList();
	},
	methods: {
		// 选中
		choose(item) {
			// item 返回选中 JSON 对象
			console.log(item)
		},
		// 模拟加载数据
		getList() {
			if (this.list.length < data.list.length) {
				uni.showLoading({
					title: '加载中...'
				})
				setTimeout(() => {
					this.end = this.page * 10;
					this.list = this.list.concat(data.list.slice(this.start, this.end));
					this.start = this.end;
					uni.hideLoading();
				}, 300)
			}
		}
	}
}
</script>

<style>
</style>