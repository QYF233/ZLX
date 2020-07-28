<template>
	<view>
		<view class="content">
			<view class="status_bar">
				<!-- 这里是状态栏 -->
			</view>
			<home-header></home-header>
			<home-location></home-location>
			<home-icon></home-icon>
			<h1>推荐</h1>
			<wfalls-flow :list="list" ref="wfalls" @finishLoad="getLoadNum" @sendBack="choose"></wfalls-flow>
		</view>
	</view>
</template>

<script>
	const data = require('@/common/json/recommendData.json')
	import HomeHeader from './components/Header'
	import HomeLocation from './components/Location'
	import HomeIcon from './components/Icon'
	import HomeFind from './components/Find'
	import WaterfallFlow from '@/components/nairenk-waterfall-flow/nairenk-waterfall-flow.vue';
	import wfallsFlow from '@/components/wfalls-flow/wfalls-flow'
	export default {
		name: 'Home',
		components: {
			HomeHeader,
			HomeLocation,
			HomeIcon,
			HomeFind,
			WaterfallFlow,
			wfallsFlow
		},
		data() {
			return {
				list:[],
				isNewRenderDone:false
			}
		},
		methods:{
			getLoadNum(num){
				!this.isNewRenderDone&&uni.hideLoading()
				this.isNewRenderDone = true
			},
			choose(data){
				uni.navigateTo({
					url:data.url
				})
			}
		},
		onLoad() {
			// 模拟首次加载列表数据
			setTimeout(()=>{
				this.list = data.list;
				this.$refs.wfalls.init();
			},200)
		},
		onReachBottom() {
			// 加锁，避免在加载更多时用户频繁下拉导致的重复触发而渲染异常
			if(!this.isNewRenderDone) return;   
			this.isNewRenderDone = false
			uni.showLoading({title:'正在加载更多'})
			// 模拟分页请求 (加载更多)
			setTimeout(()=>{
				const nextData = JSON.parse(JSON.stringify(this.list.slice(0,10)))
				this.list.push(...nextData);
				setTimeout(()=>{
					this.$refs.wfalls.handleViewRender();
				},0)
				uni.hideLoading()
			},200)
		}
	}
</script>

<style scoped>
	.content {
		display: flex;
		flex-direction: column;
		background: url('~@/static/image/xihu2.png');
		background-repeat: no-repeat;
		background-size: contain;
	}
	h1 {
		font-size: 18px;
		margin-left: 20rpx;
	}
</style>
