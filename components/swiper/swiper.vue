<template>
	<view>
		<swiper class="swiper" acceleration="true" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item class="swiper-item" v-for="(item,index) of swiperList" :key="item.id">
				<view class="">
					<image class="swiper-img" :src="item.img" mode="widthFix"></image>
					<!-- <previewImage ref="previewImage" :imgs="item.img" :descs="item.content"></previewImage> -->
					<view class="swiper-font">
						<view class="title">
							<!-- 标题 -->
							{{item.title}}
						</view>
						<view class="cont">
							<!-- 内容 -->
							{{item.content}}
						</view>
						<view class="index">
							{{index+1}}/{{swiperList.length}}
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import previewImage from '@/components/kxj-previewImage/kxj-previewImage.vue';
	export default {
		components: {
			previewImage
		}, //注册插件
		props: {
			indicatorDots: {
				defalut: true,
			},
			autoplay: {
				defalut: false,
			},
			interval: {
				defalut: 2000,
			},
			duration: {
				defalut: 500,
			},
			swiperList: {}
		},
		onLoad() {

		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	page {
		background: #fff;
	}

	.swiper {
		width: 100%;
		height: 1500rpx;
	}

	.swiper-img {
		width: 100%;
		/* height: 1200rpx; */
		/* 图片高度根据图片自身 */
	}

	.swiper-font {
		padding: 20px 10px;
		/* height: 150px; */
		box-shadow: 0 -3px 3px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;

	}

	.cont {
		color: #828282;
		font-size: 30rpx;
		padding-top: 10px;
	}

	.index {
		align-self: flex-end;
		/* position: absolute;
		right: 10px;
		bottom: 10px; */
		color: #828282;
		font-size: 24rpx;

	}

	/* .index :after{
		overflow: hidden;
	} */
</style>
