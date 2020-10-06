<!-- 寻吃详情页 -->
<template>
	<view class="page">
		<imgsBanner :imgList='imgList' :currentImg='currentImg'></imgsBanner>

		<view class="detail padding-lr flex justify-between">
			<uni-title type="h1" :title="foodName"></uni-title>
			<view class="right flex">
				<view class="favor" @click="tofavor()">
					<text>收藏</text>
					<view class="favor-icon">
						<view class="cuIcon-favorfill" v-if="favor"></view>
						<view class="cuIcon-favor" v-else></view>
					</view>
				</view>
				<view class="like" @click="tolike()">
					<text>点赞</text>
					<view class="like-icon">
						<view class="cuIcon-likefill" v-if="like"></view>
						<view class="cuIcon-like" v-else></view>
					</view>
				</view>
			</view>
		</view>

		<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="0==TabCur?'text-blue':''" @tap="tabSelect" data-id="0">
				<text class="cuIcon-camerafill"></text> 简介
			</view>
			<view class="cu-item" :class="1==TabCur?'text-blue cur':''" @tap="tabSelect" data-id="1">
				<text class="cuIcon-upstagefill"></text> 评论
			</view>
			<view class="cu-item" :class="2==TabCur?'text-blue cur':''" @tap="tabSelect" data-id="2">
				<text class="cuIcon-clothesfill"></text> 更多
			</view>
		</scroll-view>

		<view class="content">
			<view class="cu-item shadow" v-if="TabCur==0">
				<uni-title class="introduce" type="h1" title="简介"></uni-title>
				<text class="text">{{introduce}}</text>
				<uni-title class="story" type="h1" title="历史故事"></uni-title>
				<!-- <text class="text">{{story}}</text> -->
			</view>
			<view class="comment" v-if="TabCur==1">
				<!-- <uni-title type="h1" title="评论"></uni-title> -->
				<comment></comment>
			</view>
			<view class="more" v-if="TabCur==2">
				<uni-title type="h1" title="更多"></uni-title>
			</view>
		</view>
	</view>
</template>
<script>
	import comment from "./components/comment.vue"
	import uniTitle from "@/components/uni-title/uni-title.vue"
	import imgsBanner from '../../components/imgsBanner-tag/imgsBanner-tag.vue'
	export default {
		components: {
			imgsBanner,
			uniTitle,
			comment
		},
		data() {
			return {
				test: "sssss",
				title: "网友评论",
				imgList: [],
				currentImg: 0, //当前默认选中
				foodId: '',
				foodName: '',
				introduce: '',
				TabCur: 0,
				scrollLeft: 0,
				favor: false, //收藏
				like: false, //点赞
			};
		},
		onLoad: function(option) {
			this.foodId = parseInt(option.id);
			this.getData();
			// this.getComment();
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			async getData() {
				const res = await this.$myRequest({
					url: 'food/getfood?id=' + this.foodId,
				})
				this.imgList = res.data.pic;
				this.introduce = res.data.introduce;
				this.foodName = res.data.foodName;
			},
			/**
			 * 格式化发布日期
			 * @param {Object} dateString
			 */
			formateDate(dateString) {
				dateString = parseInt(dateString) * 1000;
				let date = new Date(dateString);
				let formatStr = dateUtils.dateFormat('YYYY年mm月dd日 HH:MM:SS', date);
				return formatStr;
			},
			tofavor() {
				this.favor = !this.favor;
				if (this.favor) {
					uni.showToast({
						icon: 'none',
						title: "收藏成功"
					})

				} else {
					uni.showToast({
						title: "取消收藏"
					})
				}
			},
			tolike() {
				this.like = !this.like;
				if (this.like) {
					uni.showToast({
						icon: 'none',
						title: "点赞成功"
					})
				} else {
					uni.showToast({
						title: "取消点赞"
					})
				}
			}




		},


	}
</script>
<style lang="stylus" scoped>
	.right {
		flex-direction: row
	}

	.favor,
	.like {
		height 60rpx;
		line-height: 60rpx;
		display: flex;
		flex-direction: row;
		margin-left: 20rpx;
	}

	.favor-icon {
		margin-left 10rpx;
		color: #ffaa00;
	}

	.like-icon {
		margin-left 10rpx;
		color: red;
	}

	.introduce {
		padding 20rpx
	}

	.story {
		padding 20rpx
	}

	.text {
		padding 20rpx
	}
</style>
