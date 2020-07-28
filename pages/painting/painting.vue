<template>
	<view class="painting">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<waterfall-flow :list="list" @click="gotoDetail"></waterfall-flow>
		<view class="add" @click="post">
			<uni-transition :show="addShow" :mode-class="['slide-bottom','fade','zoom-in']">
				<view class="add_btn">
					<view class="iconfont">
						&#xe6cd;
					</view>
				</view>
			</uni-transition>
		</view>
		
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
				scrollTop:0,
				addShow:true
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
				this.addShow = true
				uni.showTabBar({
					animation:true
				})
			}		
			if(e.scrollTop > 500){
				if(e.scrollTop - this.scrollTop > 10){
					uni.hideTabBar({
						animation:true
					})
					this.addShow = false
				}
			}
			this.scrollTop = e.scrollTop
		},
		methods: {
			post(){
				uni.chooseImage({
					success(res) {
						uni.navigateTo({
							url:'/pages/painting/postPhoto?imgs=' + encodeURIComponent(JSON.stringify(res.tempFilePaths))
						})
					}
				})
			},
			// 选中
			gotoDetail(item) {
				uni.navigateTo({
					url:'/pages/painting/Detail?id=' + item.id
				})
			},
			// 模拟加载数据
			getList() {
				if (this.list.length < data.list.length) {
					uni.showLoading({
						title: '加载中...'
					})
					setTimeout(() => {
						this.end = this.page * 30; 
						this.list = this.list.concat(data.list.slice(this.start, this.end));
						this.start = this.end;
						// uni.hideLoading();
					})
				}else{
					uni.showLoading({
						title: '加载中...'
					})
					setTimeout(() => {
						uni.showToast({
							icon:'none',
							title:'没有更多了'
						})
					})
				}
			}
		}
	}
</script>

<style>
	.add{
		bottom: 20rpx;
		position: fixed;
		width: 80rpx;
		left: 50%;
		right: 50%;
		margin-left: -40rpx;
	}
	.add_btn {
		background-color: #007AFF;
		border-radius: 50%;
		height: 80rpx;
		width: 80rpx;
		margin: auto;
		color: #FFFFFF;
		text-align: center;
		line-height: 80rpx;
		font-size: 28px;
	}
</style>