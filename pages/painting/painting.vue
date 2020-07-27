<template>
	<view class="painting">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<waterfall-flow :list="list" @click="choose"></waterfall-flow>
		
	</view>
	
</template>

<script>
	import WaterfallFlow from '@/components/nairenk-waterfall-flow/nairenk-waterfall-flow.vue';
	const data = require('@/common/json/data.json');
	export default {
		components: {
			WaterfallFlow
		},
		data() {
			return {
				page: 1,
				start: 0,
				end: 0,
				list: [], // 列表
				scrollTop:0
			}
		},
		onLoad() {
			this.getList();
		},
		onReachBottom() {
			this.page++;
			this.getList();
		},
		onPageScroll(e){
			if(this.scrollTop - e.scrollTop > 10){
				uni.showTabBar({
					animation:true
				})
			}		
			if(e.scrollTop > 500){
				if(e.scrollTop - this.scrollTop > 10){
					uni.hideTabBar({
						animation:true
					})
				}
			}
			this.scrollTop = e.scrollTop
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
					},300)
				}else{
					uni.showLoading({
						title: '加载中...'
					})
					setTimeout(() => {
						uni.showToast({
							icon:'none',
							title:'没有更多了'
						})
					},300)
				}
			}
		}
	}
</script>

<style>
	
</style>
