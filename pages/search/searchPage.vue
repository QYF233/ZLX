<template>
	<view class="">
		<zy-search :is-focus="false" :show-want="false" :showHis="false" :backPage="backPage" :home="false" :valueText="data"
		 @getSearchText="data"></zy-search>
		<uni-card class="card" @click="clickCard" isShadow>
			<view class="box">
				<view class="left">
					<image class="content-img" src="../../static/image/hangzhou.jpg" mode="widthFix"></image>
				</view>
				<view class="right">
					<view class="right-top flex justify-between align-start">
						<uni-title class="title" type="h1" :title="data"></uni-title>
						<text class="temp">晴，25℃~30℃</text>
					</view>
					<view class="right-bottom flex justify-between align-end">
						<text class="site">
							<view>100个景点</view>
						</text>
						<navigator url="/pages/search/searchDetail">
							<text class="more">更多<text class="lg cuIcon-right"></text></text>
						</navigator>
					</view>
				</view>

			</view>
		</uni-card>

		<view class="icon">
			<view class="cu-list grid col-4">
				<view class="cu-item">
					<view class="iconfont">&#xe66d;</view>
					<text>美食</text>
				</view>
				<view class="cu-item">
					<view class="iconfont">&#xe627;</view>
					<text>景点</text>
				</view>
				<view class="cu-item">
					<view class="iconfont">&#xe626;</view>
					<text>文化</text>
				</view>
				<view class="cu-item">
					<view class="iconfont">&#xe625;</view>
					<text>攻略</text>
				</view>
			</view>
		</view>



		<view class="hot">
			<view class="cu-bar justify-center bg-white">
				<view class="action sub-title">
					<text class="text-xl text-bold text-green">热门景点</text>
					<text class="bg-green" style="width:2rem"></text>
					<!-- last-child选择器-->
				</view>
			</view>
			<view class="cu-list grid col-3 big">
				<view class="cu-item">
					<view class="tag bg-yellow">
						top1
					</view>
					<view class="bg-img-lg flex align-end justify-end" style="background-image: url(../../static/image/hangzhou.jpg);">
						<view class="name padding-xs text-white">
							<view class="padding-xs text-lg text-bold">
								鲁迅故里
							</view>
						</view>

					</view>
				</view>
				<view class="cu-item">
					<view class="tag bg-yellow">
						top2
					</view>
					<view class="bg-img-lg flex  align-end justify-end" style="background-image: url(../../static/image/shaoxing.jpg);">
						<view class="name padding-xs text-white align-end">
							<view class="padding-xs text-lg text-bold">
								大禹陵
							</view>
						</view>
					</view>
				</view>
				<view class="cu-item">
					<view class="tag bg-yellow">
						top3
					</view>
					<view class="bg-img-lg flex  align-end justify-end" style="background-image: url(../../static/image/jiaxing.jpg);">
						<view class="name padding-xs text-white">
							<view class="padding-xs text-lg text-bold">
								新昌大佛寺
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-list grid col-4 small">
				<view class="cu-item">
					<view class="tag bg-yellow">
						top4
					</view>
					<view class="bg-img-sm flex align-end justify-end" style="background-image: url(../../static/image/zhoushan.jpg);">
						<view class="name padding-xs text-white">
							<view class="padding-xs text-sm text-bold">
								五洩景区
							</view>
						</view>
					</view>
				</view>
				<view class="cu-item">
					<view class="tag bg-yellow">
						top5
					</view>
					<view class="bg-img-sm flex  align-end justify-end" style="background-image: url(../../static/image/ningbo.jpg);">
						<view class="name padding-xs text-white align-end">
							<view class="padding-xs text-sm text-bold">
								吼山名胜区
							</view>
						</view>
					</view>
				</view>
				<view class="cu-item">
					<view class="tag bg-yellow">
						top6
					</view>
					<view class="bg-img-sm flex  align-end justify-end" style="background-image: url(../../static/image/jinhua.jpg);">
						<view class="name padding-xs text-white">
							<view class="padding-xs text-sm text-bold">
								东湖
							</view>
						</view>
					</view>
				</view>
				<view class="cu-item">
					<!-- <view class="tag bg-yellow">
						top3
					</view> -->
					<view class="bg-img-sm flex  align-end justify-end" style="background-image: url(../../static/image/lishui.jpg);">
						<view class="name padding-xs text-white">
							<view class="padding-xs text-sm text-bold">
								更多
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-bar justify-center bg-white">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue">其他攻略</text>
				<text class="text-ABC text-blue">Other</text>
				<!-- last-child选择器-->
			</view>
		</view>
		<waterfalls-flow :wfList='list' @itemTap="choose"></waterfalls-flow>
	</view>
</template>
<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import zySearch from './components/Search.vue'
	import uniCard from '@/components/uni-card/uni-card.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import WaterfallsFlow from '@/components/WaterfallsFlow/WaterfallsFlow.vue'
	export default {
		components: {
			uniCard,
			zySearch,
			uniNavBar,
			uniSearchBar,
			WaterfallsFlow
		},
		data() {
			return {
				list: [],
				data: '',
				backPage: "/pages/search/search",
			}
		},
		onLoad: function(option) {
			this.data = option.data;
			this.loadList()
		},
		methods: {
			loadList() {
				this.list = []
				setTimeout(() => {
					uni.request({
						url: this.websiteUrl + 'home/list',
						success: (res) => {
							this.pages = res.data.pages
							let p = res.data.list
							p.sort(function() {
								return .5 - Math.random();
							});
							this.list = this.list.concat(p)
						}
					})
				})
			},
			switchToCurrentCity() {
				this.getCityObject(this.currentCity)
				this.loadList()
			},
			homeLoadList(city) {
				if (city.name !== this.cityname) {
					this.cityname = city.name
					this.citybackgroundImage = city.backgroundImage
					this.getWeather()
					this.loadList()
				}
			},
			appendList() {
				uni.showLoading({
					title: "正在加载"
				})
				if (this.page == this.pages) {
					uni.hideLoading()
					uni.showToast({
						icon: 'none',
						title: '没有更多了'
					})
					return
				}
				this.page++
				setTimeout(() => {
					uni.request({
						url: this.websiteUrl + 'home/list?page=' + this.page,
						success: (res) => {
							let p = res.data.list
							p.sort(function() {
								return .5 - Math.random();
							});
							this.list = this.list.concat(p)
							uni.hideLoading()
						}
					})
				})
			},
			choose(data) {
				uni.navigateTo({
					url: data.url
				})
			},
		}
	}
</script>
<style lang="scss" scoped>
	.box {
		display: flex;
		flex-direction: row;

		.left {
			flex-direction: column;
			display: inline-block;
			width: 180upx;
			margin-right: 20upx;
		}

		.right {
			width: 100%;

			.right-top {
				height: 50%;
			}

			.title {
				padding: 0;
			}

			.right-bottom {
				height: 50%;
			}
		}
	}

	.iconfont {
		font-size: 1.8em;
	}

	.big {
		.bg-img-lg {
			background-size: cover;
			height: 300rpx;
		}

		.cu-item {
			padding: 0;
		}
	}

	.small {
		margin-top: 0;

		.bg-img-sm {
			background-size: cover;
			height: 200rpx;
		}

		.cu-item {
			padding: 0;
		}
	}

	.cu-item {
		position: relative;

	}

	.name {
		width: 100%;
		text-align: right;
		background-color: rgba($color: #000000, $alpha: 0.2);
	}



	.tag {
		z-index: 10;
		position: absolute;
		top: 10;
		left: 0;
		padding: 8rpx;
		color: #FFFFFF;
	}
</style>
