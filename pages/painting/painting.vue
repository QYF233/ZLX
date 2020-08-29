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
				swiperList: [{
						img: '/static/image/painting1.jpg',
						title: '星空1',
						content: '安静笼罩著夏夜巨大的星空,覆盖著整个地球,温柔地无声无息安静笼罩著夏夜巨大的星空,覆盖著整个地球,温柔地无声无息安静笼罩著夏夜巨大的星空,覆盖著整个地球,温柔地无声无息安静笼罩著夏夜巨大的星空,覆盖著整个地球,温柔地无声无息安静笼罩著夏夜巨大的星空,覆盖著整个地球,温柔地无声无息安静笼罩著夏夜巨大的星空,覆盖著整个地球,温柔地无声无息安静笼罩著夏夜巨大的星空,覆盖著整个地球,温柔地无声无息'
					},
					{
						img: '/static/image/painting2.jpg',
						title: '星空2',
						content: '星星就像一盏盏小电灯,在空中闪烁'
					},
					{
						img: '/static/image/painting1.jpg',
						title: '星空3',
						content: '我在星空的这一端,你在星空的那一端,相隔很远这很远。灿烂的永恒,无尽的遥远,再也无法相见..'
					}, {
						img: '/static/image/hangzhou.jpg',
						title: '星空4',
						content: '一切都如生命一般,在悄然地发生着变化,就如这黑夜一样,失去了光明,却得到了星空.'
					},
				],
			}
		},
		methods: {

		}
	}
</script>



<style>

</style>
