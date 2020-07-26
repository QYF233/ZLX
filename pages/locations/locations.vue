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
	const data = require('../../common/json/locationsItem.json');
	import Item from './components/item.vue'
	export default {
		name:'Locations',
		components:{
			Item
		},
		onPullDownRefresh() {
			uni.vibrateShort()
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
		onReachBottom() {
			uni.showLoading({
				title: '加载中...'
			})
			setTimeout(()=>{
				this.loadMore()
				uni.hideLoading()
			},500)
			this.page++
			
		},
		methods:{
			loadMore(){
				this.articles=this.articles.concat(data.articles)				
			}
		},
		data() {
			return {
				articles:[],
				page:1
			}
		},
		onLoad() {
			this.articles = this.articles.concat(data.articles)
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
