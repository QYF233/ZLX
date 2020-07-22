<template>
	<view>
		<view class="container" :class="{dark:dark}">
			<view class="title">{{title}}</view>
			<view class="author">{{author}}</view>
			<view class="text" v-html="text"></view>
			<view class="comment">
				<comment></comment>
			</view>
			<view class="footer">
				<view class="foot-left"></view>
				看完了
				<view class="foot-right"></view>
			</view>
		</view>
		<view :class="[!dark?'foot':'bigfoot']">
			<view :class="[!dark?'':'bigsay']">
				<textarea type="text" :class="[!dark?'commentinput':'bigcommentinput']" @blur="hideComment" 
				:value="comment" placeholder="说点什么..." @focus="showComment" @input="input"/>
				<button v-show="dark" class="send" size="mini" type="primary" @click="send">发表</button>
			</view>
			<view class="save-like" v-show="!dark">
				<view class="save" :class="{clicked:saveclicked}" @click="saveadd">
					<view class="iconfont">
						&#xe90d;
					</view>
					<text>&nbsp; {{save}}</text>
				</view>
				<view class="like" :class="{clicked:likeclicked}" @click="likeadd">
					<view class="iconfont">
						&#xe76a;
					</view>
					<text>&nbsp; {{like}}</text>
				</view>
			</view>
		</view>
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
				if(this.saveclicked){
					this.save--
				} else{
					this.save++
				}
				this.saveclicked = !this.saveclicked
			},
			likeadd(){
				if(this.likeclicked){
					this.like--
				} else{
					this.like++
				}
				this.likeclicked = !this.likeclicked
			},
			showComment(){
				this.dark = true
			},
			hideComment(e){
				this.dark = false
			},
			send(){
				console.log(this.comment)
				this.comment = ''
			},
			input(e){
				this.comment = e.detail.value
			}
		},
		onLoad(option) {
			
		},
		data() {
			return {
				title:'西湖最强游玩攻略',
				author:'萌萌的薯片',
				text: '<p>西湖可以玩一整天，先走走断桥，然后去雷峰塔那，（雷峰塔可以坐电梯上去）下来后再坐船去三潭印月，（船票成人55，其中船票35岛的门票20，船票是包括来回的，上岛随便玩，然后可以选择东南西北四个方向坐船在回去，当然4个发现到达的地方不一样，可以去湖滨，少年宫等等地方）欣赏一元人民币的美，</p>'+
				'<img src="https://pic3.zhimg.com/80/v2-85b809f2b0e41a8ec443a80f80f582cf_720w.jpg" style="width: 350px;margin: 10px auto;display: block;" alt="">'+
				'<p>然后选择杭饭的方向坐船到岳王（岳飞）庙逛逛，（成人票25）然后在往西湖方向走（很近最多8分钟就到了）先去最近的西泠印社（吴邪去过的地方免门票）</p>'+
				'<img src="https://pic4.zhimg.com/80/v2-d574bd26e6324016896d06168dfa14f3_720w.jpg" style="width: 350px;margin: 10px auto;display: block;" alt="">'+
				'<img src="https://pic1.zhimg.com/80/v2-af2f28c63ed40b5a000237b1df523316_720w.jpg" style="width: 350px;margin: 10px auto;display: block;" alt="">'+
				'<p>一直往前走就是孤山（免门票），孤山的旁边是中山公园（免门票）爬，紧接着是西湖博物馆（免门票），西湖美术馆（免门票），然后可以在楼外楼吃个正宗的杭帮菜（边赏西湖夜景边吃），糖醋鱼，龙井虾仁，等等，</p>'+
				'<img src="https://pic2.zhimg.com/80/v2-2962f72dcfd786751848632c6f5cc3e0_720w.jpg" style="width: 350px;margin: 10px auto;display: block;" alt="">'+
				'<p>还可以放放风筝</p>'+
				'<img src="https://pic4.zhimg.com/80/v2-ba9b11e82cf939df3c6c393c080e6c92_720w.jpg" style="width: 350px;margin: 10px auto;display: block;" alt="">'+
				'<p>直走200米左拐出去有个利星名品还有一栋阿迪达斯都可以逛逛</p>',
				save:20,
				like:120,
				saveclicked:false,
				likeclicked:false,
				dark:false,
				comment:''
			}
		}
	}
</script>

<style>
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
		font-size: 16px;
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
	.comment {
		border-top: 1px solid #c5c5c5;
		margin: 40rpx 0 20rpx 0;
	}
	.save-like{
		display: flex;
		margin: 0 auto;
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
		width: 400rpx;
		height: 60rpx;
		border-radius: 10rpx;
		margin: 15rpx 0;
		line-height: 60rpx;
		padding: 0 10rpx;
	}
	.dark{
		filter: contrast(50%);
	}
	.bigfoot{
		background-color: #FFFFFF;
		width: 100%;
		height: 400rpx;
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
		width: 100%;
		height: 370rpx;
		border-radius: 10rpx;
		margin: 15rpx 0;
		padding: 0 10rpx;
	}
	.send{
		position: absolute;
		bottom: 30rpx;
		right: 30rpx;
	}
</style>
