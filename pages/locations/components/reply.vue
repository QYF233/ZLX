<template>
	<view>
		<view class="reply" @click="toggleInput">
			<text class="name">{{user.name}}</text>
			
			<template v-if="replyto!==null">
				<text class="huifu">回复</text> <text class="name">{{replyto.name}}</text>
			</template>
			<text>:{{context}}</text>
		</view>
		
		<uni-transition 
		:mode-class="['slide-right','fade','zoom-in']" :duration="300"
		:show="show">
			<view class="goreply">
				<view class="delete_btn" @click="deleteReply" v-show="this.user.id === 123">删除</view>
				<view class="input_box">
					<input type="text" class="replyinput" @blur="hideInput" :value="text" @input="input" :placeholder="placehoder">
				<view class="replybtn" @click="send">发表</view>
				</view>
				
			</view>
		</uni-transition>
	</view>
</template>

<script>
	import uniTransition from "@/components/uni-transition/uni-transition.vue"
	export default {
		name:"Reply",
		props:{
			id:Number,
			user:Object,
			replyto:Object,
			context:String,
			dark:Boolean
		},
		components:{
			uniTransition
		},
		data(){
			return {
				show:false,
				text:'',
				placehoder:'',
			}
		},
		beforeMount() {
			this.placehoder = '回复给 ' + this.user.name + ":"
		},
		methods:{
			toggleInput(){
				if(!this.dark){
					this.show = !this.show
				}
				
			},
			hideInput(){
				this.show = false
			},
			input(e){
				this.text = e.detail.value
			},
			send(){
				if(this.text === '') {
					return
				}
				let loginUser = uni.getStorageSync('user')
				if(loginUser){
					this.$emit("updateReply",{
						content:{
							id:parseInt(Math.random()*10000+20),
							user:{
								id:loginUser.id,
								name:'林其龙'
							},
							replyto:{
								id:this.user.id,
								name:this.user.name
							},
							context:this.text
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
			deleteReply(){
				this.$emit("deleteReply",{
					reply_id:this.id
				})
			}
		}
	}
</script>

<style>
	.reply {
		padding: 5rpx 0;
	}
	.reply:active {
		background-color: #e5e5e5;
	}
	.goreply{
		background-color: #E5E5E5;
		padding: 10rpx 10rpx;
		margin-top: 20rpx;
		border-radius: 10rpx;
	}
	.input_box{
		display: flex;
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
	.name {
		color: #007AFF;
	}
	.huifu{
		color: #b5b5b5;
	}
	.delete_btn {
		color: #007AFF;
		margin: 5rpx;
	}
</style>
