<template>
	<view class="">
		<zy-search :is-focus="false" :show-want="false" :showHis="false" :backPage="backPage" :home="false"
		:valueText="data" @getSearchText="data"></zy-search>
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
			<view class="cu-list grid col-3">
				<view class="cu-item">
					<view class="bg-img flex align-center" style="background-image: url(../../static/image/hangzhou.jpg);">
						<view class="padding-xl text-white">
							<view class="padding-xs text-sm text-bold">
								鲁迅故里
							</view>
						</view>
					</view>
				</view>
				<view class="cu-item">
					<view class="bg-img bg-mask flex align-center" style="background-image: url(../../static/image/shaoxing.jpg);">
						<view class="padding-xl text-white align-end">
							<view class="padding-xs text-sm text-bold">
								大禹陵
							</view>
						</view>
					</view>
				</view>
				<view class="cu-item">
					<view class="bg-img bg-mask flex align-center" style="background-image: url(../../static/image/jiaxing.jpg);">
						<view class="padding-xl text-white">
							<view class="padding-xs text-sm text-bold">
								新昌大佛寺
							</view>
						</view>
					</view>
				</view>
			</view>

		</view>


	</view>
</template>
<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import zySearch from './components/Search.vue'
	import uniCard from '@/components/uni-card/uni-card.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniCard,
			zySearch,
			uniNavBar,
			uniSearchBar
		},
		data() {
			return {
				data: '',
				backPage:"/pages/search/search",
			}
		},
		onLoad: function(option) {
			this.data = option.data;
		},
		methods: {

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

	.bg-img {
		background-size: cover;
		height: 300rpx;

	}
</style>
