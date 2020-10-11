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
		<search-hot></search-hot>
		<view class="cu-bar justify-center bg-white">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue">其他攻略</text>
				<text class="text-ABC text-blue">Other</text>
				<!-- last-child选择器-->
			</view>
		</view>
		<search-other :listData = "listData"></search-other>
		<!-- <waterfalls-flow :wfList='list' @itemTap="choose"></waterfalls-flow> -->
	</view>
</template>
<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import zySearch from './components/Search.vue'
	import uniCard from '@/components/uni-card/uni-card.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import SearchHot from "./components/SearchHot.vue"
	// import WaterfallsFlow from '@/components/WaterfallsFlow/WaterfallsFlow.vue'
	import SearchOther from "./components/SearchOther.vue"
	export default {
		components: {
			uniCard,
			zySearch,
			uniNavBar,
			uniSearchBar,
			SearchHot,
			SearchOther
			// WaterfallsFlow
		},
		data() {
			return {
				listData: [],
				list: [],
				data: '',
				backPage: "/pages/search/search",
				hot:[{
					id:1,
					name: "鲁迅"
				}]
			}
		},
		onLoad: function(option) {
			this.data = option.data;
			// this.loadList()
			this.getData();
		},
		methods: {
			async getData() {
				const res = await this.$myRequest({
					url: 'home/list'
				})
				for (var i = 0; i < res.data.list.length; i++) {
					this.listData.push(res.data.list[i])
				}
				console.log(this.listData);
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

	
</style>
