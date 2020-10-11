<template>
	<view>
		<swiperImg 
		:swiperList="swiperList" 
		:indicatorDots="true" 
		:autoplay="false" 
		:interval="2000" 
		:duration="500" />
	</view>
</template>
<script>
	import swiperImg from '@/components/swiper/swiper.vue'
	export default {
		components: {
			swiperImg
		},
		data() {
			return {
				swiperList: []
			}
		},
		onLoad() {
			this.getData();
		},
		methods: {
			async getData() {
				uni.showLoading({
					title: '加载中'
				});
				const res1 = await this.$myRequest({
					url: 'painting/getlist'
				})
				uni.hideLoading();
				console.log(this.swiperList);
				for (var i = 0; i < res1.data.list.length; i++) {
					this.swiperList.push(res1.data.list[i])
				}
				console.log(this.swiperList);
			}
		}
	}
</script>



<style  lang="stylus" scoped>

</style>
