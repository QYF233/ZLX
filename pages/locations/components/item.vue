<template>
	<view class="item-view" @click="todetail">
		<view class="item-top">
			<view class="title">{{article.title}}</view>
		</view>
		<view class="item-bottom">
			<view class="item-bottom-left">
				<view class="author">{{article.author.name}}</view>
				<view class="text">{{changeTextSize}}</view>
			</view>
			<view class="item-bottom-right" v-if="article.photo !== ''">
				<image class="image" :src="article.photo"></image>
			</view>
		</view>
		<view class="date">{{article.date}}</view>
	</view>
</template>
<script>
	export default {
		name:"textPhoto",
		methods:{
			todetail:function(){
				uni.navigateTo({
					url:'/pages/locations/locationsDetail?id=2',
					animationType: 'slide-in-bottom',
					animationDuration: 300
				})
			}
		},
		props:{
			article:Object
		},
		computed:{
			changeTextSize(){
				let text = this.text
				if(this.article.photo===''){
					if(this.article.text.length>100){
						text = this.article.text.substr(0,100)+"..."
					}
					return text
				}
				if(this.article.text.length>50){
					text = this.article.text.substr(0,50)+"..."
				}
				return text
			}
		}
	}
</script>

<style>
	.item-view {
		margin:20rpx 0;
		border-top: 1px #e5e5e5 solid;
		background-color: #ffffff;
		padding: 20rpx;
		box-shadow: 0px 4px 4px #AAAAAA;
	}
	.image {
		width: 200rpx;
		height: 150rpx;
		border-radius: 10rpx;
		background-color: #e5e5e5;
	}
	.item-bottom {
		margin-top: 5rpx;
		display: flex;
	}
	.title {
		font-weight: bold;
		font-size: 16px;
	}
	.author {
		font-size: 12px;
		color: #b9b9b9;
		margin-bottom: 10rpx;
	}
	.date{
		font-size: 12px;
		color: #b5b5b5;
	}
</style>
