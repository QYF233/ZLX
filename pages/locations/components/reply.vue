<template>
	<view>
		<view class="reply" @click="toggleInput">
			<text class="name">{{username}}</text>
			
			<template v-if="replyto!==null"><text class="huifu">回复</text> <text class="name">{{replyto.username}}</text></template>
			<text>:{{context}}</text>
			
		</view>
		
		<uni-transition 
		:mode-class="['slide-right','fade','zoom-in']" :duration="300"
		:show="show">
			<view class="goreply">
				<input type="text" class="replyinput" @blur="hideInput" :value="text" @input="input" :placeholder="placehoder">
				<view class="replybtn" @click="send">发表</view>
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
			username:String,
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
				placehoder:''
			}
		},
		beforeMount() {
			this.placehoder = '回复给 ' + this.username + ":"
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
				console.log(this.text + ' ' + this.id)
				this.text = '',
				this.$emit("update",1)
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
	.name {
		color: #007AFF;
	}
	.huifu{
		color: #b5b5b5;
	}
</style>
