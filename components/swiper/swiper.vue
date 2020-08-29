<template>
	<view>
		<swiper class="swiper" acceleration="true" :autoplay="autoplay" :interval="interval" 
		:duration="duration" @change="toTop"
		 :style="{'height':scrollHeight+'px'}">
			<swiper-item class="swiper-item" v-for="(item,index) of swiperList" :key="item.id" >
				<view class="swiper-hei">
					<image class="swiper-img" :src="item.img" mode="widthFix"></image>
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
	export default {
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
		data() {
			return {
				scrollHeight: ""
			}
		},
		mounted: function() {
			this.toPic(this.swiperList[0].img);
		},
		methods: {
			/* 将页面滚动到顶部 */
			toTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
				// console.log(data);
				// this.toPic(data);
				this.mounted()
			},
			mounted() {
				// console.log(this);
				let info = uni.createSelectorQuery().in(this).select('.swiper-hei').boundingClientRect();
				info.exec(res => {
					this.scrollHeight = res[0].height
					console.log(this.scrollHeight)
				})
			},
			toPic(data) {
				let img_url = data;
				let img = new Image();
				img.src = img_url;
				console.log('width:' + img.width + ', height:' + img.height);
				this.scrollHeight = img.height+300
				console.log(this.scrollHeight);
			}
		}
	}
</script>

<style>
	page {
		background: #fff;
	}

	.swiper {
		width: 100%;
		/* height: 1500rpx; */
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

	.index :after {
		overflow: hidden;
	}
</style>
