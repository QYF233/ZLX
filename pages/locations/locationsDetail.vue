<template>
	<view>
		<view v-if="article == null">
			正在加载...
		</view>
		<template v-if="article != null">
		<view class="container" :class="{show:show}" @tap="hideComment">
			<view class="title">{{article.title}}</view>
			<view class="author">{{article.author.name}}</view>
			<view class="date">{{article.date}}</view>
			<view class="text" v-html="article.content"></view>
			<view class="comments">
				<h1>评论</h1>
				<view class="comment" v-for="c in article.comments" :key="c.id">
					<uni-transition :show="true" :mode-class="['slide-buttom','fade','zoom-in']">
						<comment :id="c.id" :user="c.user" :context="c.content"
						:replys="c.replys" :time="c.time" :dark="show" @updateReply="updateReply"
						@deleteReply="deleteReply" @deleteComment="deleteComment" :currentUserId="currentUserId"></comment>
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
				<view v-show="show">
					<button class="cancel" size="mini" type="warn" @click="cancel">取消</button>
					<button class="send" size="mini" type="primary" @click="send">发表</button>
					<view class="number">{{counter}}/140</view>
				</view>
			</view>
			<view class="save-like" v-show="!show">
				<view class="save" :class="{clicked:saveclicked}" @click="saveadd">
					<view class="iconfont">
						&#xe90d;
					</view>
					<text>&nbsp; {{article.saveNumber}}</text>
				</view>
				<view class="like" :class="{clicked:likeclicked}" @click="likeadd">
					<view class="iconfont">
						&#xe76a;
					</view>
					<text>&nbsp; {{article.likeNumber}}</text>
				</view>
			</view>
		</view>
		</template>
	</view>
</template>

<script>
	import Comment from './components/comment.vue'
	export default {
		name:"locationsDetail",
		components:{
			Comment
		},
		methods:{
			saveadd(){
				if (this.currentUserId === 0) {
					uni.showToast({
						icon:'none',
						title:'你还没有登录'
					})
					return
				}
				if(this.saveclicked){
					uni.request({
						url:this.websiteUrl + 'collection/delete',
						data:{
							userId:this.currentUserId,
							articleId:this.article.id
						},
						success: () => {
							this.article.saveNumber--
						}
					})
					
				} else{
					uni.request({
						url:this.websiteUrl + 'collection/insert',
						data:{
							userId:this.currentUserId,
							articleId:this.article.id
						},
						success: () => {
							this.article.saveNumber++
						}
					})
				}
				this.saveclicked = !this.saveclicked
			},
			likeadd(){
				if (this.currentUserId === 0) {
					uni.showToast({
						icon:'none',
						title:'你还没有登录'
					})
					return
				}
				if(this.likeclicked){
					uni.request({
						url:this.websiteUrl + 'article/dislike',
						data:{
							id:this.article.id
						},
						success: () => {
							this.article.likeNumber--
						}
					})
				} else{
					uni.request({
						url:this.websiteUrl + 'article/like',
						data:{
							id:this.article.id
						},
						success: () => {
							this.article.likeNumber++
						}
					})
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
				if(this.currentUserId!==0){
					uni.request({
						url:this.websiteUrl + 'comment/insert',
						method:'POST',
						header:{
							'content-type':this.contentType
						},
						data:{
							userId:this.currentUserId,
							targetId:this.article.id,
							content:this.text,
							modular:1
						},
						success: (res) => {
							this.updateComment({
								content:{
									id:res.data.id,
									user:{
										id:res.data.user.id,
										name:res.data.user.name,
										icon:res.data.user.icon,
									},
									content:res.data.content,
									replys:[],
									time: res.data.time
								}
							})
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
				let send = {
					userId:data.content.user,
					commentId:data.target_id,
					content:data.content.content
				}
				if(data.content.replyTo){
					send.replyToId = data.content.replyTo
				}
				uni.request({
					url:this.websiteUrl + 'reply/insert',
					header:{
						'content-type':this.contentType
					},
					method:'POST',
					data:send,
					success: (res) => {
						let reply = {
							id:res.data.id,
							user:{
								id:res.data.user.id,
								name:res.data.user.name
							},
							replyTo:res.data.replyTo,
							content:res.data.content,
						}
						for(let comment of this.article.comments){
							if(comment.id === data.target_id){
								comment.replys.push(reply)
								break
							}
						}
					}
				})
				
			},
			deleteReply(data){
				uni.request({
					url:this.websiteUrl + 'reply/delete?id=' + data.reply_id,
					success: () => {
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
					}
				})
				
			},
			deleteComment(data){
				uni.request({
					url:this.websiteUrl + 'comment/delete?id=' + data,
					success: () => {
						let index = 0
						for(let comment of this.article.comments){
							if(comment.id === data){
								this.article.comments.splice(index,1)
								break
							}
							index++
						}
					}
				})
				
			}
		},
		computed:{
			counter(){
				return this.text.length
			}
		},
		onLoad:function(option){
			let loginUser = uni.getStorageSync('user')
			if(loginUser){
				this.currentUserId = loginUser.id
			}
			uni.request({
				url:this.websiteUrl + 'article/getarticle?id=' + option.id + '&userid=' + this.currentUserId,
				success: (res) => {
					if(res.statusCode === 200) {
						this.article = res.data
						this.saveclicked = res.data.saved
						let t = this.article.title
						if (t.length>13){
							t = t.substr(0,13)+'...'
						}
						uni.setNavigationBarTitle({
						　　title:t
						})
					}
					
				}
			})	
		},
		data() {
			return {
				article:null,
				saveclicked:false,
				likeclicked:false,
				show:false,
				text:'',
				currentUserId:0
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
	.text >>> p{
		margin: 1.4em 0;
		font-size: 16px;
	}
	.text >>> img{
		 width: 700rpx;
		 margin: 1.4em auto;
		 display: block;
	}
	.text >>> figcaption{
		font-size: 14px;
		color: #b5b5b5;
		text-align: center;
	}
</style>
