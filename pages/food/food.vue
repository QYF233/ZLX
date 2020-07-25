<!-- 寻吃 -->
<template>
	<view class="container">
		<header-banner :foods="foodsInBanner"></header-banner>
		<food-image></food-image>
		<view class="more">更多</view>
	</view>
</template>

<script>
	import HeaderBanner from './components/HeaderBanner.vue'
	import FoodImage from './components/Body.vue'
	export default {
		name:'food',
		components:{
			HeaderBanner,
			FoodImage
		},
		data() {
			return {
				foodsInBanner:[
					{
						id:1,
						url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1194064447,3680178733&fm=26&gp=0.jpg'
					},
					{
						id:2,
						url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2705769963,4281957781&fm=26&gp=0.jpg'
					},
					{
						id:3,
						url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595685284347&di=9547ccff715f2e8b430b83a3ffe7b511&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10%2F244%2Fw640h404%2F20180402%2F4247-fyssmme6064947.jpg'
					},
					{
						id:4,
						url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595686095288&di=86425faaeaaa335b3121242f12ca78e3&imgtype=0&src=http%3A%2F%2Fccm.ddcdn.com%2Ftourism%2FYK%2FJS%2F1291605856EgrIFcnA.jpg'
					},
					{
						id:5,
						url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2671291707,213654660&fm=26&gp=0.jpg'
					}
				],
				foodInList:[
					
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.more{
	text-align: right;
	margin-right:75rpx;
	margin-bottom:50rpx;
	color:orange;
}
.container {
	padding: 0 20rpx;
}
</style>
