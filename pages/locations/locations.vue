<!-- 寻境 -->
<template>
	<view>
		<view v-for="article in articles" :key="article.id">
			<item :article="article"></item>
		</view>
		<view class="foot">
			<view class="foot-left"> </view>
			 没有了
			<view class="foot-right"> </view>
		</view>
	</view>
</template>

<script>
	import Item from './components/item.vue'
	export default {
		name:'Locations',
		components:{
			Item
		},
		onPullDownRefresh() {
			uni.vibrateShort()
			uni.request({
				url:this.websiteUrl + 'article/getlist?page=' + this.page,
				success: (res) => {
					this.pages = res.data.pages
					this.articles = []
					this.articles = this.articles.concat(res.data.list)
				}
			})
			uni.stopPullDownRefresh({
				success:function(){
					uni.showToast({
						title:'刷新成功',
						icon:'none',
						position:'bottom'
					})
				}
			});
		},
		onReachBottom() {
			this.loadMore()
		},
		methods:{
			loadMore(){
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
				uni.request({
					url:this.websiteUrl + 'article/getlist?page=' + this.page,
					success: (res) => {
						this.list = this.list.concat(res.data.list)
					}
				})
				uni.hideLoading()
			}
		},
		data() {
			return {
				articles:[],
				page:1,
				pages:0
			}
		},
		onLoad() {
			uni.request({
				url:this.websiteUrl + 'article/getlist?page=' + this.page,
				success: (res) => {
					this.pages = res.data.pages
					this.articles = this.articles.concat(res.data.list)
				}
			})
		}
	}
</script>

<style>
	.foot {
		text-align: center;
		color: #c5c5c5;
		margin-bottom: 20rpx;
	}
	.foot-left,.foot-right{
		display: inline-block;
		height: 0;
		width: 20%;
		border-top: 1px solid #c5c5c5;
		margin: 10rpx 10rpx;
	}
</style>
