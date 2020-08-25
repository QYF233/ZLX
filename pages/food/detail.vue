<template>
	<view class="page">
		<imgsBanner :imgList='imgList' :currentImg='currentImg'></imgsBanner>
	<!-- 	<uni-section title="竖线装饰" sub-title="副标题" type="line"></uni-section> -->
		<text>{{introduce}}</text>
	</view>
</template>
<script>
	import imgsBanner from '../../components/imgsBanner-tag/imgsBanner-tag.vue'
	export default {
		components: {
			imgsBanner
		},
		data() {
			return {
				imgList: [],
				currentImg: 0, //当前默认选中
				foodId: '',
				foodName:'',
				introduce:'',
			};
		},
		onLoad: function(option) {
			console.log(option.id);
			this.foodId = parseInt(option.id) + 1;
			this.getData();
		},
		methods: {
			async getData() {
				const res = await this.$myRequest({
					url: '/food/getfood?id=' + this.foodId,
				})
				// console.log(res.data)
				this.imgList = res.data.pic;
				this.introduce = res.data.introduce;
				this.foodName = res.data.foodName;
			},
		}
	}
</script>
<style  lang="scss">
	// @import '@/common/uni-nvue.scss';
</style>
