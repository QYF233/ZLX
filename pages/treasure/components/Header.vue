<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item>
							<image src="../../../static/tsImage/ts1.jpg" mode="scaleToFill"></image>
						</swiper-item>
						<swiper-item>
							<image src="../../../static/tsImage/ts2.jpg" mode="scaleToFill"></image>
						</swiper-item>
						<swiper-item>
							<image src="../../../static/tsImage/ts3.jpg" mode="scaleToFill"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSwiperDot from '@/pages/treasure/components/uni-swiper-dot/uni-swiper-dot.vue'
	export default {
		components: {
			uniSwiperDot
		},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				thid.duration = e.target.value
			}
		}
	}
</script>

<style>
	template{
		margin-bottom: 5px;
	}
	.swiper-box {
		border-radius: 0rpx;
		padding: 0px;
	}

	.swiper-item {
		height: 100%;
	}
	
	image{
		width: 100%;
	}
</style>
