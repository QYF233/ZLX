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
			<!-- <wfalls-flow :list="list" ref="wfalls" @finishLoad="getLoadNum" @sendBack="choose" v-show="show"></wfalls-flow> -->
			<waterfalls-flow :wfList='list' @itemTap="choose"></waterfalls-flow>
		</view>
	</view>
</template>

<script>
	const data = require('@/common/json/recommendData.json')
	import HomeHeader from './components/Header'
	import HomeLocation from './components/Location'
	import HomeIcon from './components/Icon'
	import HomeFind from './components/Find'
	import WaterfallsFlow from '@/components/WaterfallsFlow/WaterfallsFlow.vue'
	export default {
		name: 'Home',
		components: {
			HomeHeader,
			HomeLocation,
			HomeIcon,
			HomeFind,
			WaterfallsFlow
		},
		data() {
			return {
				list:[],
			}
		},
		methods:{
			choose(data){
				uni.navigateTo({
					url:data.url
				})
			}
		},
		onLoad() {
			// 模拟首次加载列表数据
			setTimeout(()=>{
				this.list = this.list.concat(data.list)
			},200)
		},
		onReachBottom() {
			uni.showLoading({
				title:"正在加载"
			})
			setTimeout(()=>{
				this.list = this.list.concat(data.list)
				uni.hideLoading()
			},200) 
		}
	}
</script>

<style scoped>
	page{
		background-color: #FFFFFF;
	}
	.content {
		display: flex;
		flex-direction: column;
		background: url('~@/static/image/xihu2.png');
		background-repeat: no-repeat;
		background-size: contain;
		/* height:300px;
		box-sizing:border-box;
		background:no-repeat center top / 100% 100%;
		background-image:linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(255,255,255,1)), url('~@/static/image/xihu.jpg') */
	}
	h1 {
		font-size: 18px;
		margin-left: 20rpx;
	}
	.temp {
		text-align: center;
	}
</style>
