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
		</view>
	</view>
</template>
<script>
	export default {
		name:"textOnly",
		methods:{
			todetail:function(){
				uni.navigateTo({
					url:'/pages/locations/locationsDetail?id='+this.id
				})
			}
		},
		props:{
			id:Number,
			title:String,
			text:String,
			author:String,
		},
		computed:{
			changeTextSize(){
				let text = this.text
				if(this.text.length>100){
					text = this.text.substr(0,100)+"..."
				}
				return text
			}
		}
	}
</script>

<style>
	@import '../css/style.css';
</style>
