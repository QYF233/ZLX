<template>
	<view>
		<view class="container" :class="{dark:dark}">
			<view class="title">{{title}}</view>
			<view class="author">{{author}}</view>
			<view class="date">{{date}}</view>
			<view class="text" v-html="text"></view>
			<view class="comments">
				<h1>评论</h1>
				<view class="comment" v-for="c in comments" :key="c.id">
					<comment :id="c.id" :usericon="c.usericon"
					:username="c.username" :context="c.context"
					:replys="c.replys" :time="c.time"></comment>
				</view>
			</view>
			<view class="footer">
				<view class="foot-left"></view>
				看完了
				<view class="foot-right"></view>
			</view>
		</view>
		<view :class="{bigfoot:dark,foot:!dark}">
			<view :class="[isshow?'bigsay':'']">
				<textarea type="text" :class="[isshow?'bigcommentinput':'commentinput']" @blur="hideComment" 
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
			hideComment(){
				this.dark = false
			},
			send(){
				console.log(this.comment + ' ' + this.id)
				this.comment = ''
			},
			input(e){
				this.comment = e.detail.value
			},
		},
		onLoad(option) {
			let t = this.title
			if (t.length>13){
				t = t.substr(0,13)+'...'
			}
			uni.setNavigationBarTitle({
			　　title:t
			})
			this.id = option.id
		},
		computed:{
			isshow(){
				return this.dark
			}
		},
		data() {
			return {
				id:0,
				title:'西湖最强游玩攻略',
				author:'亦雨清晨',
				date:"2020-7-3",
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
				comments:[
					{
						id:10,
						usericon:'https://pic4.zhimg.com/v2-2474d44c9fc5a2370eb248a6080fb480_s.jpg',
						username:'露露欧尼酱',
						context:'每次都要赞你', 
						replys:[
							{
								id:100,
								username:'亦雨清晨',
								replyto:'',
								context:'谢谢',
							}
						],
						time:'2020-7-8 14:25'
					},
					{
						id:11,
						usericon:'https://pic4.zhimg.com/e2cc2b856_s.jpg',
						username:'叽歪陈',
						context:'太粗略了，好多真的值得去的景点没提，河坊街什么的真的不值一提。龙井、茅家埠、梅家坞、九溪，这些不应该一个西湖就带过了。',
						replys:[
							{
								id:100,
								username:'亦雨清晨',
								replyto:'',
								context:'好的吧 回头修改修改',
							},
							{
								id:101,
								username:'你还怕大雨吗',
								replyto:'',
								context:'那杭州什么地方比较值得去呢',
							}
						],
						time:'2020-7-8 16:55'
					},
					{
						id:12,
						usericon:'https://pic1.zhimg.com/v2-1a5316c3a9945bf2377ea2c05d9a65a2_s.jpg',
						username:'起风了',
						context:'表示在这一个月了，除了西湖没哪个值得去的。湿地上次进去刚好花期还不错。平时也没必要进去，边上有个不用钱的小湿地就很不错了。',
						replys:[
							{
								id:100,
								username:'sniperelite',
								replyto:'',
								context:'杭州可不就看个西湖和湖边嘛。还有就是江边的六和塔那些去看看就成了。',
							}
						],
						time:'2020-7-8 08:01'
					},
					{
						id:13,
						usericon:'https://pic3.zhimg.com/v2-d6e979060d88563a7a066adb530964d8_s.jpg',
						username:'Levi',
						context:'上次去了西湖音乐喷泉，真的非常好看',
						replys:[
							
						],
						time:'2020-7-8 01:00'
					},
					{
						id:14,
						usericon:'https://pic4.zhimg.com/v2-85390b19224d589bc8f4b38414724c78_s.jpg',
						username:'小新',
						context:'这个规划个人感觉蛮靠谱的，过几天带爸妈去杭州两天打算照楼主的路线游玩，嘿嘿',
						replys:[
							{
								id:20,
								username:'知秋',
								replyto:'',
								context:'怎么样兄弟，这个路线靠谱吗？我也打算去耍两天'
							},
							{
								id:21,
								username:'知秋',
								replyto:'',
								context:'怎么样兄弟，这个路线靠谱吗？我也打算去耍两天'
							},
							{
								id:22,
								username:'梦旅人',
								replyto:'',
								context:'怎么样兄弟，我也……[捂脸]'
							},
							{
								id:23,
								username:'知秋',
								replyto:'',
								context:'西湖国庆偶遇有木有'
							},
							{
								id:24,
								username:'阿扑吖',
								replyto:'知秋',
								context:'有！！我二号出发从武汉去杭州！！'
							},
							{
								id:25,
								username:'之乎者也',
								replyto:'知秋',
								context:'哎呀，巧了，我一号从合肥出发[爱]'
							}
						],
						time:'2020-7-8 12:11'
					}
				],
				saveclicked:false,
				likeclicked:false,
				dark:false,
				comment:''
			}
		}
	}
</script>

<style>
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
		width: 500rpx;
		height: 60rpx;
		border-radius: 10rpx;
		margin: 15rpx 0;
		line-height: 60rpx;
		padding: 0 10rpx;
	}
	.dark{
		filter: contrast(30%);
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
	.date{
		font-size: 12px;
		color: #B5B5B5;
		margin-top: 20rpx;
	}
</style>
