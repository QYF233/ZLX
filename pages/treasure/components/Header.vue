<template>
	<view>
		<view class="uni-padding-wrap">
			<uni-swiper-dot :info="info" :current="current" mode="nav" field="content">
				<swiper class="swiper-box" @change="change">
					<swiper-item v-for="(item, index) in info" :key="index">
						<view :class="item.colorClass" class="swiper-item">
							<image class="image" :src="item.url" mode="aspectFill" />
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
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
				info: [{
						colorClass: 'uni-bg-red',
						url: '/static/tsImage/ts1.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: '/static/tsImage/ts2.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: '/static/tsImage/ts3.jpg',
						content: '内容 C'
					}
				],
				modeIndex: 3,
				styleIndex: -1,
				current: 0,
				mode: 'nav',
			}
		},
		methods: {
			change(e) {
				this.current = e.detail.current
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
