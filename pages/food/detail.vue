<!-- 寻吃详情页 -->
<template>
	<view class="page">
		<imgsBanner :imgList='imgList' :currentImg='currentImg'></imgsBanner>
		<view class="detail padding-lr">
			<uni-title type="h1" :title="foodName"></uni-title>
			<text>{{introduce}}</text>
		</view>
		
		<view class="comment padding-lr">
			<uni-title type="h1" title="评论"></uni-title>
		</view>
		<!-- <comment :commentData="commentData"></comment> -->
		        <!-- 
		        @param: commentList展示的评论列表数据
		        @method: clickPraise 点赞评论
		        @method: clickDelete 删除父级评论
		        @method: clickRecommentChild 点赞子评论
		        @method: clickDeleteChild 删除子评论
		         -->
		        <five-mul-commentlist
		            :commentList="commentList"
		        ></five-mul-commentlist>
	</view>
</template>
<script>
	import fiveMulCommentlist from "@/components/five-mul-commentlist/five-mul-commentlist.vue"
	import commentData from './components/comment.js'
	import comment from "./components/comment.vue"
	import uniTitle from "@/components/uni-title/uni-title.vue"
	import imgsBanner from '../../components/imgsBanner-tag/imgsBanner-tag.vue'
	import commentList from './components/comment2.js'
	export default {
		components: {
			imgsBanner,
			uniTitle,
			comment,
			fiveMulCommentlist
		},
		data() {
			return {
				title:"网友评论",
				commentList:[],
				commentData: [],
				imgList: [],
				currentImg: 0, //当前默认选中
				foodId: '',
				foodName: '',
				introduce: ''
			};
		},
		onLoad: function(option) {
			this.foodId = parseInt(option.id);
			this.getData();
			this.getComment();
			console.log(commentList);
			this.commentList = commentList.commentList;
		},
		methods: {
			getComment() {
				this.commentData = commentData.items;
				// console.log(this.commentData);
			},
			async getData() {
				const res = await this.$myRequest({
					url: 'food/getfood?id=' + this.foodId,
				})
				this.imgList = res.data.pic;
				this.introduce = res.data.introduce;
				this.foodName = res.data.foodName;
			},
			
		},


	}
</script>
<style lang="stylus" scoped>
	.detail {
		// margin-top:32rpx;
	}
</style>
