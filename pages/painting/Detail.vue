<template>
	<view class="detail">
		<view class="user">
			<view class="usericon">
				<image :src="detail.user.avatar" mode="" class="icon"></image>
				<view class="name">
					{{detail.user.name}}
					<view class="date">
						{{detail.date}}
					</view>
				</view>
			</view>
		</view>
		<view class="imgs" :class="detail.image.length<4? 'oneLine':detail.image.length<7?'twoLine':'threeLine'">
			<view class="img_container">
				<view :style="'background-image:url('+ item +')'" 
				:class="detail.image.length<4? 'divOne':detail.image.length<7?'divTwo':'divThree'"
				v-for="(item,index) in detail.image" :key="index" @click="previewImage(index)" class="img"></view>
			</view>
		</view>
		<view class="content">
			{{detail.content}}
		</view>
		<h1>评论</h1>
		<view class="input">
			<input type="text" value="" class="commentinput" @input="inputHander" :value="input" placeholder="谈谈你的看法吧"/>
			<view class="send_btn" @click="send">发送</view>
		</view>
		<view class="comment">
			<comment @deleteComment="deleteComment" 
			:currentUserId="currentUserId" :comment="comment" v-for="comment in detail.comment" :key="comment.id"></comment>
		</view>
		<view class="foot">
			<view class="foot-left"> </view>
			 没有了
			<view class="foot-right"> </view>
		</view>
	</view>
</template>

<script>
	const data = require('@/common/json/paintingDetail.json');
	import Comment from './components/comment.vue'
	export default{
		components:{
			Comment
		},
		data(){
			return {
				id:0,
				detail:{},
				currentUserId:0,
				input:''
			}
		},
		methods:{
			send(){
				this.detail.comment.push({
					id:parseInt(Math.random()*10000+20),
					"user":{
						"id":this.currentUserId,
						"name":"林其龙",
						"icon":"https://pic4.zhimg.com/v2-2474d44c9fc5a2370eb248a6080fb480_s.jpg"
					},
					"context":this.input,
					"time":"2020-8-8"
				})
				this.input = ''
			},
			previewImage(index) {
				uni.previewImage({
					urls:this.detail.image,
					current:index,
					indicator:'number',
					longPressActions:{}
				})
			},
			inputHander(e){
				this.input = e.detail.value
			},
			deleteComment(id){
				let index = 0
				for(let c of this.detail.comment) {
					if(c.id === id){
						this.detail.comment.splice(index,1)
					}
					index++
				}
			}
		},
		onLoad(e) {
			this.id = e.id
			this.detail = data.detail
			let loginUser = uni.getStorageSync('user')
			if(loginUser){
				this.currentUserId = loginUser.id
			}
		}
	}
</script>

<style scoped>
	.commentinput{
		background-color: #E5E5E5;
		margin: 20rpx;
		height: 60rpx;
		padding: 0 10rpx;
		border-radius: 5px;
		width: 80%;
	}
	.send_btn{
		color: #007AFF;
		line-height: 60rpx;
		margin: 20rpx 0;
	}
	.input {
		display: flex;
	}
	.comment {
		margin-top: 20rpx;
	}
	h1{
		font-size: 18px;
	}
	.content {
		padding-bottom: 20rpx;
		margin-bottom: 20rpx;
		border-bottom: solid 1px #E5E5E5;
	}
	page{
		background-color: #FFFFFF;
	}
	.detail {
		padding: 20rpx;
	}
	.usericon {
		display: flex;
		line-height: 30rpx;
	}
	.icon {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
	}
	.date{
		font-size: 11px;
		color: #B5B5B5;
	}
	.name{
		margin-left: 10rpx;
		font-size: 16px;
	}
	.imgs{
		width: 100%;
		position: relative;
		height: 0;
		margin: 20rpx 0;
	}
	.oneLine {
		padding-bottom: 33%;
	}
	.twoLine {
		padding-bottom: 66%;
	}
	.threeLine {
		padding-bottom: 100%;
	}
	
	.img_container{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.img{
		width: calc(94% / 3);  /* calc里面的运算符两边要空格 */
		margin: 3px;
		overflow: hidden;
		float: left;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.divOne {
		height: calc(94% / 1);
	}
	.divTwo {
		height: calc(94% / 2);
	}
	.divThree {
		height: calc(94% / 3);
	}
	.foot {
		text-align: center;
		color: #c5c5c5;
		margin: 20rpx 0;
	}
	.foot-left,.foot-right{
		display: inline-block;
		height: 0;
		width: 20%;
		border-top: 1px solid #c5c5c5;
		margin: 10rpx 10rpx;
	}
</style>
