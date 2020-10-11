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
				<view class="text padding-xs">{{introduce}}</view>
				<uni-title class="story" type="h1" title="历史故事"></uni-title>
				<view class="text padding-xs">
					西湖醋鱼的历史，源于南宋京都临安（今杭州），得从南宋杭州的“宋嫂鱼羹”说起。
					<br>
					宋五嫂，为南宋著名民间女厨师，高宗赵构乘龙舟西湖，曾尝其鱼羹，赞美不已，于是名声大振，奉为脍鱼之“师祖”。后来有人吃了这个菜，诗兴大发，在菜馆墙壁上写了一首诗：“裙屐联翩买醉来，绿阳影里上楼台；门前多少游湖艇，半自三潭印月回。何必归寻张翰鲈（誉西湖醋鱼胜过味美适口的松江鲈鱼），鱼美风味说西湖；亏君有此调和手，识得当年宋嫂无。”诗的最后一句，指的就是“西湖醋鱼”。从此，宋嫂鱼羹，遂扬名于世。其后又经名手整治，乃成西湖醋鱼与宋嫂鱼羹两种名菜，流传至今。
					<br>
					民国时期，文人梁实秋曾记载过该菜的烹饪方法：选用西湖草鱼，鱼长不过尺，重不逾半斤，宰割收拾过后沃以沸汤，熟即起锅，勾芡调汁，浇在鱼上，即可上桌。如今在杭州几个著名饭店都有这道菜，但杭州居民家中并不常见，现在部分饭店已经用鲈鱼替代。
				</view>
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
