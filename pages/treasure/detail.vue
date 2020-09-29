<template>
	<view class="container">

		<swiper class="card-swiper square-dot " :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
		 duration="500" @change="cardSwiper" indicator-color="#8799a3" indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in imgList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image :src="item" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>

		<uni-card :title="treasure.treasureName" :extra="杭州" isShadow :note="treasure.place" @click="clickCard">
			<text class="content-box-text">
				<view class="content">
					{{treasure.content}}
				</view>
			</text>
		</uni-card>
		<!-- <view class="card">
			<view class="header flex justify-between">
				<view class="treasureName">
					{{treasure.treasureName}}
				</view>
				<view class="">
					杭州
				</view>
			</view>
			<view class="content">
				{{treasure.content}}
			</view>
			<view class="foot">
				{{treasure.place}}
			</view>
		</view> -->
	</view>
</template>
<script>
	export default {
		components: {},
		data() {
			return {
				id: "",
				cardCur: 0,
				imgList: [],
				treasure: [],
				towerStart: 0,
				direction: ''
			};
		},
		onLoad: function(option) {
			/* 分类id */
			this.id = option.id;
			this.getData();
		},
		methods: {
			async getData() {
				const res1 = await this.$myRequest({
					url: '/treasure/getlist'
				})
				for (var i = 0; i < res1.data.list.length; i++) {
					if (res1.data.list[i].id == this.id) {
						this.treasure = res1.data.list[i];
						this.imgList = res1.data.list[i].img;
					}
				}
				console.log(this.treasure);
				console.log(this.imgList);

			},
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},

		}
	}
</script>
<style lang="stylus" scoped>
	.uni-card__header-title-text {
		font-size 1.5em
	}

	.title {
		margin 10px 0;
	}

	.treasureName {
		font-size 1.8em
	}

	.introduce {
		font-size 1.5em
	}

	.content {
		text-indent: 2em;
	}

	.card {
		margin 20rpx 30rpx;
		background-color #FFFFFF;
		border-radius 10%;
		padding 40rpx;
	}
</style>
