<template>
	<swiper class="screen-swiper square-dot" indicator-dots="true" autoplay="true" circular="true">
		<swiper-item v-for="food in foods" :key="food.id">
			<view class="swiper-item" @click="to(food.id)">
				<img :src="food.url" mode="" class="img"></img>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props:{
			foods:Array
		},
		methods:{
			to(id){
				console.log(id)
				//去详情页
			}
		}
	}
</script>

<style>
	.img{
		height: 400rpx;
		width: 100%;
	}
</style>
