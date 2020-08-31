<template>
	<view class="painting">
		<waterfall-flow :wfList="list"  @itemTap="gotoDetail"></waterfall-flow>
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
	export default {
		components: {
			WaterfallFlow
		},
		data() {
			return {
				list: [], // 列表
				scrollTop:0,
				addShow:true,
				page:1,
				pages:0
			}
		},
		onLoad() {
			this.loadData()
		},
		onReachBottom() {
			this.appendList()
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
		onPullDownRefresh() {
			uni.vibrateShort()
			this.loadData()
			setTimeout(function () {
				uni.stopPullDownRefresh({
					success:function(){
						uni.showToast({
							title:'刷新成功',
							icon:'none',
							position:'bottom'
						})
					}
				});
			}, 300);
		},
		methods: {
			loadData(){
				this.list = []
				setTimeout(()=>{
					uni.request({
						url:this.websiteUrl + 'photo/list',
						success: (res) => {
							this.pages = res.data.pages
							this.list = this.list.concat(res.data.list)
						}
					})
				})
			},
			appendList(){
				uni.showLoading({
					title:"正在加载"
				})
				this.page++
				if(this.page > this.pages) {
					uni.showToast({
						icon:'none',
						title:'没有更多了'
					})
					return
				}
				setTimeout(()=>{
					uni.request({
						url:this.websiteUrl + 'photo/list?page=' + this.page,
						success: (res) => {
							this.list = this.list.concat(res.data.list)
						}
					})
					uni.hideLoading()
				},200)
			},
			post(){
				let loginUser = uni.getStorageSync('user')
				if(!loginUser) {
					uni.showToast({
						icon:'none',
						title:'您还没有登录'
					})
					return
				}
				uni.chooseImage({
					sizeType:['compressed'],
					success(res) {
						uni.navigateTo({
							url:'/pages/photo/postPhoto?imgs=' + encodeURIComponent(JSON.stringify(res.tempFilePaths))
						})
					}
				})
			},
			// 选中
			gotoDetail(item) {
				uni.navigateTo({
					url:'/pages/photo/Detail?id=' + item.id
				})
			},
		}
	}
</script>

<style>
	.add{
		bottom: 80rpx;
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