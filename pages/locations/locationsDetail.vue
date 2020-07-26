<template>
	<view>
		<view class="container" :class="{show:show}" @tap="hideComment">
			<view class="title">{{article.title}}</view>
			<view class="author">{{article.author.name}}</view>
			<view class="date">{{article.date}}</view>
			<view class="text" v-html="article.content"></view>
			<view class="comments">
				<h1>评论</h1>
				<view class="comment" v-for="c in article.comments" :key="c.id">
					<uni-transition :show="true" :mode-class="['slide-buttom','fade','zoom-in']">
						<comment :id="c.id" :user="c.user" :context="c.context"
						:replys="c.replys" :time="c.time" :dark="show" @updateReply="updateReply"
						@deleteReply="deleteReply" @deleteComment="deleteComment"></comment>
					</uni-transition>
				</view>
			</view>
			<view class="footer">
				<view class="foot-left"></view>
				看完了
				<view class="foot-right"></view>
			</view>
		</view>
		<view :class="{bigfoot:show,foot:!show}">
			<view :class="[show?'bigsay':'']">
				<textarea type="text" :class="[show?'bigcommentinput':'commentinput']" 
				:value="text" placeholder="说点什么..." @click="showComment" @input="input"/>
				<uni-transition
				:mode-class="['slide-buttom','fade','zoom-in']" :duration="300"
				:show="show">
					<button class="cancel" size="mini" type="warn" @click="cancel">取消</button>
					<button class="send" size="mini" type="primary" @click="send">发表</button>
					<view class="number">{{counter}}/140</view>
				</uni-transition>
			</view>
			<uni-transition
			:mode-class="['slide-top','fade','zoom-in']" :duration="300"
			:show="!show">
			<view class="save-like" v-show="!show">
				<view class="save" :class="{clicked:saveclicked}" @click="saveadd">
					<view class="iconfont">
						&#xe90d;
					</view>
					<text>&nbsp; {{article.save}}</text>
				</view>
				<view class="like" :class="{clicked:likeclicked}" @click="likeadd">
					<view class="iconfont">
						&#xe76a;
					</view>
					<text>&nbsp; {{article.like}}</text>
				</view>
			</view>
			</uni-transition>
		</view>
	</view>
</template>

<script>
	const data = require('../../common/json/locationsDetail.json');
	import Comment from './components/comment.vue'
	export default {
		name:"locationsDetail",
		components:{
			Comment
		},
		methods:{
			saveadd(){
				if(this.saveclicked){
					this.article.like--
				} else{
					this.article.save++
				}
				this.saveclicked = !this.saveclicked
			},
			likeadd(){
				if(this.likeclicked){
					this.article.like--
				} else{
					this.article.like++
				}
				this.likeclicked = !this.likeclicked
			},
			showComment(){
				this.show = true
			},
			hideComment(){
				this.show = false
			},
			send(){
				if(this.text === ''){
					return
				}
				let loginUser = uni.getStorageSync('user')
				if(loginUser){
					let date = new Date()
					let time = date.getFullYear() + "-" + (date.getMonth()+1)
					+ '-' + date.getDate() + ' ' + date.getHours() + ':' + 
					(date.getMinutes()<10? ('0'+date.getMinutes()) : (date.getMinutes()))
					this.updateComment({
						content:{
							id:parseInt(Math.random()*10000+20),
							user:{
								id:loginUser.id,
								name:'林其龙',
								icon:'https://pic4.zhimg.com/v2-2474d44c9fc5a2370eb248a6080fb480_s.jpg',
							},
							context:this.text,
							replys:[],
							time: time
						}
					})
					this.cancel()
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
			cancel(){
				this.text = ''
				this.hideComment()
			},
			updateComment(data){
				this.article.comments.push(data.content)
			},
			updateReply(data){
				for(let comment of this.article.comments){
					if(comment.id === data.target_id){
						comment.replys.push(data.content)
						break
					}
				}
			},
			deleteReply(data){
				for(let comment of this.article.comments){
					if(comment.id === data.comment_id){
						let index = 0
						for(let reply of comment.replys){
							if(reply.id === data.reply_id){
								comment.replys.splice(index,1)
								break
							}
							index++
						}
						break
					}
				}
			},
			deleteComment(data){
				let index = 0
				for(let comment of this.article.comments){
					if(comment.id === data){
						this.article.comments.splice(index,1)
						break
					}
					index++
				}
			}
		},
		computed:{
			counter(){
				return this.text.length
			}
		},
		onLoad(option) {
			this.article = data.article
			let t = this.article.title
			if (t.length>13){
				t = t.substr(0,13)+'...'
			}
			uni.setNavigationBarTitle({
			　　title:t
			})			
		},
		data() {
			return {
				article:{},
				saveclicked:false,
				likeclicked:false,
				show:false,
				text:''
			}
		}
	}
</script>

<style>
	.number {
		position: absolute;
		bottom: 12rpx;
		right: 160rpx;
	}
	h1 {
		font-size: 18px;
	}
	.container {
		width: 100%;
		padding: 20rpx 25rpx;
		margin-bottom: 90rpx;
		background-color: #fff;
	}
	.title {
		font-weight: bold;
		font-size: 20px;
	}
	.text {
		margin-top: 20rpx;
	}
	.author {
		font-size: 14px;
		color: #444;
		font-weight: bold;
	}
	.footer {
		height: 50rpx;
		line-height: 90rpx;
		text-align: center;
		color: #c5c5c5;
	}
	.foot-left,.foot-right{
		display: inline-block;
		height: 0;
		width: 20%;
		border-top: 1px solid #c5c5c5;
		margin: 10rpx 10rpx;
	}
	.foot {
		border-top: 1px solid #E5E5E5;
		background-color: #FFFFFF;
		width: 100%;
		height: 90rpx;
		padding: 0 25rpx;
		position: absolute;
		bottom: 0;
		position: fixed;
		line-height: 90rpx;
		display: flex;
	}
	.comments {
		margin: 40rpx 0 20rpx 0;
	}
	.save-like{
		display: flex;
		margin: 0 auto;
		padding-left: 30rpx;
	}
	.save{
		margin-right: 20rpx;
		display: flex;
	}
	.like{
		display: flex;
	}
	.clicked{
		color: red;
	}
	.addcomment {
		position: absolute;
		bottom: 0;
		width: 100%;
		position: fixed;
	}
	.commentinput{
		background-color: #F5F5F5;
		width: 500rpx;
		height: 60rpx;
		border-radius: 10rpx;
		margin: 15rpx 0;
		line-height: 60rpx;
		padding:0 10rpx;
	}
	.show{
		filter: contrast(50%);
	}
	.bigfoot{
		border-top: 1px solid #E5E5E5;
		background-color: #FFFFFF;
		width: 100%;
		height: 300rpx;
		padding: 0 25rpx;
		position: absolute;
		bottom: 0;
		position: fixed;
		line-height: 90rpx;
		display: flex;
	}
	.bigsay{
		width: 100%;
	}
	.bigcommentinput{
		background-color: #F5F5F5;
		width: 100%;
		height: 270rpx;
		border-radius: 10rpx;
		margin: 15rpx 0;
		padding: 10rpx;
	}
	.send, .cancel{
		position: absolute;
		bottom: 30rpx;
	}
	.send {
		right: 30rpx;
	}
	.cancel{
		left: 30rpx;
	}
	.date{
		font-size: 12px;
		color: #B5B5B5;
		margin-top: 20rpx;
	}
</style>
