<template>
	<view class="comment-father">
		<view class="comment">
			<view class="comment-left">
				<view class="usericon">
					<image :src="user.icon" class="icon">
				</view>
			</view>
			<view class="comment-right">
				<view class="user">
					<view class="username">
						{{user.name}}
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
						<view class="btn1" v-show="user.id === currentUserId" @click="deleteComment">删除</view>
						<view class="btn2" @click="toggleReply">回复</view>
					</view>
				</view>
				<uni-transition
				:mode-class="['slide-right','fade','zoom-in']"
				:show="show">
					<view class="goreply">
						<input type="text" class="replyinput" @blur="hideReply" :value="text"@input="input" :placeholder="placehoder">
						<view class="replybtn" type="primary" @click="send">发表</view>
					</view>
				</uni-transition>
				<view class="replys" v-show="replys.length>0">
					<template v-for="reply in replys">
						<uni-transition :mode-class="['slide-bottom','fade','zoom-in']" :show="true">
						<reply :dark="dark" @updateReply="updateReply" @deleteReply="deleteReply" :key="reply.id" 
						:id="reply.id" :user="reply.user" :context="reply.content"
						:replyto="reply.replyTo" :currentUserId="currentUserId"></reply>
						</uni-transition>
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
			user:Object,
			context:String,
			replys:Array,
			time:String,
			dark:Boolean,
			currentUserId:Number
		},
		data(){
			return {
				show:false,
				text:'',
				placehoder:''
			}
		},
		beforeMount() {
			this.placehoder = "回复给 " + this.user.name + ":"
		},
		methods:{
			toggleReply(){
				if(!this.dark){
					this.show = !this.show
				}
			},
			hideReply(){
				this.show = false
			},
			send(){
				if(this.text === ''){
					return
				}
				if(this.currentUserId !== 0){
					this.updateReply({
						content:{
							user:this.currentUserId,
							replyTo:null,
							content:this.text,
						}
					})
					this.text = ''
				} else {
					uni.showToast({
						icon:'none',
						title:'您还没有登录'
					})
				}
			},
			input(e){
				this.text = e.detail.value
			},
			updateReply(data) {
				data.target_id = this.id
				this.$emit('updateReply',data)
			},
			deleteReply(data) {
				data.comment_id = this.id
				this.$emit("deleteReply",data)
			},
			deleteComment(){
				this.$emit('deleteComment',this.id)
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
	.btn1,.btn2{
		padding-top: 20rpx;
		text-align: center;
		line-height: 30rpx;
		position: absolute;
		color: #007AFF;
	}
	.btn2 {
		right: 30rpx;
	}
	.btn1 {
		right: 100rpx;
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
