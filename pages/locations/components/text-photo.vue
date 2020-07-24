<template>
	<view class="item-view" @click="todetail">
		<view class="item-top">
			<view class="title">{{title}}</view>
		</view>
		<view class="item-bottom">
			<view class="item-bottom-left">
				<view class="author">{{author}}</view>
				<view class="text">{{changeTextSize}}</view>
			</view>
			<view class="item-bottom-right">
				<image class="image" :src="photo"></image>
			</view>
		</view>
		<view class="date">{{date}}</view>
	</view>
</template>
<script>
	export default {
		name:"textPhoto",
		methods:{
			todetail:function(){
				uni.navigateTo({
					url:'/pages/locations/locationsDetail?id='+this.id,
					animationType: 'slide-in-bottom',
					animationDuration: 300
				})
			}
		},
		props:{
			id:{
				type:Number,
				require:true
			},
			title:String,
			text:String,
			author:String,
			photo:String,
			date:String
		},
		computed:{
			changeTextSize(){
				let text = this.text
				if(this.text.length>50){
					text = this.text.substr(0,50)+"..."
				}
				return text
			}
		}
	}
</script>

<style>
	@import '../css/style.css';
</style>
