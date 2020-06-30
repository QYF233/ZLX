<template>
	<view>
		<tourist-search></tourist-search>
		<tourist-recommend></tourist-recommend>
		<tourist-share :list="list" @click="choose"></tourist-share>
	</view>
</template>

<script>
import TouristSearch from './components/Search'
import TouristRecommend from './components/Recommend'
// 瀑布流组件
import TouristShare from './components/Share';

// 模拟 JSON 数据
const data = require('../../common/json/data.json');

export default{
	name: 'Tourist',
	components: {
		TouristSearch,
		TouristRecommend,
		TouristShare
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
				}, 1000)
			}
		}
	}
}
</script>

<style>
</style>