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
					url:'/pages/locations/locationsDetail?id='+this.id,
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
	@import '../css/style.css';
</style>
