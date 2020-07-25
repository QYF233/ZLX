<template>
	<view class="comment-father">
		<view class="comment">
			<view class="comment-left">
				<view class="usericon">
					<image :src="usericon" class="icon">
				</view>
			</view>
			<view class="comment-right">
				<view class="user">
					<view class="username">
						{{username}}
					</view>
				</view>
				<view class="context">
					{{context}}
				</view>
				<view class="time-btn">
					<view class="time">
						{{time}}
					</view>
					<view class="button">
						<view class="btn" @click="toggleReply">回复</view>
					</view>
				</view>
				<uni-transition
				:mode-class="['slide-right','fade','zoom-in']"
				:show="show">
					<view class="goreply">
						<input type="text" class="replyinput" @blur="hideReply" :value="myreply"@input="input" :placeholder="placehoder">
						<view class="replybtn" type="primary" @click="send">发表</view>
					</view>
				</uni-transition>
				<view class="replys" v-show="replys.length>0">
					<template v-for="reply in replys">
						<reply :key="reply.id" :id="reply.id" :username="reply.user.username" :context="reply.context" :replyto="reply.replyto"></reply>
					</template>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Reply from './reply.vue'
	export default {
		name:"Comment",
		components:{
			Reply
		},
		props:{
			id:Number,
			usericon:String,
			username:String,
			context:String,
			replys:Array,
			time:String
		},
		data(){
			return {
				show:false,
				myreply:'',
				placehoder:''
			}
		},
		beforeMount() {
			this.placehoder = "回复给 " + this.username + ":"
		},
		methods:{
			toggleReply(){
				this.show = !this.show
			},
			hideReply(){
				this.show = false
			},
			send(){
				console.log(this.myreply+ ' ' + this.id)
				this.myreply = ''
			},
			input(e){
				this.myreply = e.detail.value
			}
		}
	}
</script>

<style>
	.replys {
		margin-top: 20rpx;
		background-color: #f5f5f5;
		border-radius: 5px;
		padding: 15rpx;
		width: 100%;
	}
	.comment-father {
		margin: 20rpx 0;
		padding-bottom: 30rpx;
		border-bottom: 1px solid #e5e5e5;
	}
	.comment{
		display: flex;
	}
	.comment-right {
		margin-left: 20rpx;
		width: 100%;
	}
	.username{
		font-weight: bold;
		font-size: 16px;
	}
	.context{
		margin-top: 10rpx;
	}
	.usericon .icon{
		width: 70rpx;
		height: 70rpx;
		border-radius: 5px;
	}
	.time-btn{
		display: flex;
	}
	.time{
		font-size: 12px;
		color: #B5B5B5;
		padding-top: 20rpx;
	}
	.btn{
		padding-top: 20rpx;
		text-align: center;
		line-height: 30rpx;
		position: absolute;
		right: 30rpx;
		color: #007AFF;
	}
	.goreply{
		background-color: #E5E5E5;
		display: flex;
		padding: 0 10rpx;
		margin-top: 20rpx;
		height: 70rpx;
		border-radius: 10rpx;
	}
	.replyinput {
		background-color: #FFFFFF;
		width: 80%;
		margin: auto 5rpx;
		height: 55rpx;
		border-radius: 10rpx;
	}
	.replybtn {
		background-color: #007aff;
		border-radius: 5px;
		margin: auto 0;
		color: #FFFFFF;
		width: 100rpx;
		height: 50rpx;
		text-align: center;
		line-height: 50rpx;
	}
	.replybtn:active{
		background-color: #0062cc;
	}
</style>
