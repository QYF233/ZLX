<template>
	<view class="container">
		
		<swiper class="card-swiper square-dot " :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
		 indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in imgList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image :src="item" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		
		<view>
			<view class="detail">
				<view class="clearfix row">
					<view class="ways text-bold">{{treasure.treasureName}}</view>
					<view class="ans">{{treasure.place}}</view>
				</view>
			</view>
			<h2>简介</h2>
			<text>{{treasure.content}}</text>
		</view>
	</view>
</template>
<script>
	
	export default {
		components: {
		},
		data() {
			return {
				id: "",
				cardCur: 0,
				imgList: [],
				treasure:[],
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

</style>
