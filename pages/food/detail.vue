<!-- 寻吃详情页 -->
<template>
	<view class="page">
		<imgsBanner :imgList='imgList' :currentImg='currentImg'></imgsBanner>
		<view class="detail">
			<uni-title type="h1" :title="foodName"></uni-title>
			<text>{{introduce}}</text>
		</view>
		<comment></comment>
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
		},
		methods: {
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
