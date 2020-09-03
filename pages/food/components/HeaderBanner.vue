<template>
	<view class="banner">
		<swiper class="swiper square-dot" indicator-dots="true" autoplay="true" circular="true">
			<swiper-item v-for="food in foods" :key="food.id">
				<view class="swiper-item" @click="to(food.id)">
					<img :src="food.url" mode="" class="img"></img>
				</view>
			</swiper-item>
		</swiper>
	</view>
	
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

<style lang="stylus" scoped>
	.img{
		height:300rpx;
		width: 100%;
		border-radius: 10px;
	}
	.swiper {
		height: 300rpx;
	}
	.banner {
		margin-top: 20rpx;
	}
</style>
